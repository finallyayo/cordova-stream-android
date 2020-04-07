import React, { useState, useEffect } from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
  ChannelList,
  ChannelListTeam,
  MessageList,
  MessageTeam,
  MessageInput,
} from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import rug from 'random-username-generator';
import axios from 'axios';

import 'stream-chat-react/dist/css/index.css';

let chatClient;

function App() {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const username = rug.generate();
    async function getToken() {
      try {
        const response = await axios.post('<YOUR_NGROK_URL>/join', {
          username,
        });
        const { token } = response.data;
        const apiKey = response.data.api_key;

        chatClient = new StreamChat(apiKey);

        await chatClient.setUser(
          {
            id: username,
            name: username,
          },
          token
        );

        const channel = chatClient.channel('team', 'general');
        await channel.watch();
        setChannel(channel);
      } catch (err) {
        console.log(err);
        return;
      }
    }

    getToken();
  }, []);

  if (channel) {
    return (
      <Chat client={chatClient} theme="team light">
        <ChannelList
          options={{
            subscribe: true,
            state: true,
          }}
          List={ChannelListTeam}
        />
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList Message={MessageTeam} />
            <MessageInput focus />
          </Window>
          <Thread Message={MessageTeam} />
        </Channel>
      </Chat>
    );
  }

  return <div>Loading...</div>;
}

export default App;

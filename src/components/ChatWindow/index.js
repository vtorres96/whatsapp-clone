import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import api from '../../services/api';

import MessageItem from '../MessageItem';

import { 
  Container,
  Header,
  HeaderInfo,
  Avatar,
  Name,
  HeaderButtons,
  Btn,
  Body,
  EmojiArea,
  Footer,
  Pre,
  InputArea,
  Pos
} from './styles';

import wallpaper from '../../assets/wallpaper.png';

import { 
  AttachFile,
  Close,
  InsertEmoticon,
  Mic,
  Search,
  Send,
  MoreVert,

} from "@material-ui/icons";

const ChatWindow = ({data, user}) => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const body = useRef();
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  useEffect(()=>{
    setList([]);
    let unsub = api.onChatContent(data.chatId, setList, setUsers);
    return unsub;
  },[data.chatId])

  useEffect(()=>{
    // checks for scroll bar
    if(body.current.scrollHeight > body.current.offsetHeight){
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  },[list]);

  // listening through the browser's microphone
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const handleEmojiClick = (e, emojiObject) => {
    setText( text + emojiObject.emoji )
  }
  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }

  const handleMickClick = () => {
    if(recognition !== null) {
      // started listening
      recognition.onstart = () => {
        setListening(true)
      }

      // finished listening
      recognition.onend = () => {
        setListening(false)
      }

      // when receive result
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }

      recognition.start();
    }
  }

  const handleSendClick = () => {
    if(text !== '') {
      api.sendMessage(data, user.id, 'text', text, users);
      setText('');
      setEmojiOpen(false);
    }
  }
  
  const handleInputkeyUp = (e) => {
    if(e.keyCode === 13){
      handleSendClick();
    }
  }

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <Avatar src={data.image} alt="" />
          <Name>{data.title}</Name>
        </HeaderInfo>
        <HeaderButtons>
          <Btn>
            <Search style={{color: '#919191'}} />
          </Btn>
          <Btn>
            <AttachFile style={{color: '#919191'}} />
          </Btn>
          <Btn>
            <MoreVert style={{color: '#919191'}} />
          </Btn>
        </HeaderButtons>
      </Header>

      <Body ref={body} img={wallpaper}>
        {list.map((item, key)=>(
          <MessageItem 
            key={key}
            data={item}
            user={user}
          />
        ))}
      </Body>

      <EmojiArea style={{height: emojiOpen ? '320px' : '0px'}}>
        <EmojiPicker 
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </EmojiArea>

      <Footer>
        <Pre>
          <Btn onClick={handleCloseEmoji} style={{width: emojiOpen ? 40 : 0 }}>
            <Close style={{color: '#919191'}} />
          </Btn>
          <Btn onClick={handleOpenEmoji}>
            <InsertEmoticon style={{color: emojiOpen ? '#009688' : '#919191'}} />
          </Btn>
        </Pre>
        <InputArea>
          <input 
            type="text" 
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e=>setText(e.target.value)}
            onKeyUp={handleInputkeyUp}
          />
        </InputArea>
        <Pos>
          { text === '' &&
            <Btn onClick={handleMickClick}>
              <Mic style={{color: listening ? "#126ECE" : "#919191"}} />
            </Btn>          
          } 

          { text !== '' &&
            <Btn onClick={handleSendClick}>
              <Send style={{color: '#919191'}} />
            </Btn>
          } 
        </Pos>
      </Footer>
    </Container>
  );
};

export default ChatWindow;

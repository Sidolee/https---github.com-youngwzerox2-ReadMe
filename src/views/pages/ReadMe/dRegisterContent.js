// Textarea 사이즈 옵션
import TextareaAutosize from 'react-textarea-autosize';
// main 배경 이미지
import theimg from '../../assets/images/main_withDol.png';
// 기본 폼
import { FormControl } from '@mui/material';
// 버튼 관련 속성. Button.d.ts 파일에 종류 있음. - variant, fullwidth 사용중
import { Box, Button, Divider, Grid } from '@mui/material';
// theme 객체 생성 위해 필요. 색깔 등은 여기서 조정하는 듯하다
import { useTheme } from '@mui/material/styles';
// customization 위해 필요
import { useSelector } from 'react-redux';
// import { width } from '@mui/system';
import '../../App.css';
// -------------------------------------------------------------------------------
// ===========================|| FIREBASE - REGISTER ||=========================== //
// jquery 쓰려고 npm install jquery 함.
// import $ from 'jquery'; g하면 걍 쓸 수 잇음.

// npm install image-map
import ImageMap from 'image-map';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// -------------------------------------------------------------------------------
const MainPage = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  useEffect(() => {
    ImageMap('img[usemap]'); // imageMap 삽입코드
  }, []);
  // ---------------------------------------------------
  // testing2 컴포넌트에서 발생하는 이벤트
  // ---------------------------------------------------
  // 1. 000의 방 클릭 ----------------------------
  // confirm 에서 확인 / 취소에 따른 값 처리 작업 필요
  const myroomClicked = () => {
    confirm('로그아웃하시겠습니까?');
  };

  // 2. 방에 배치된 사물 클릭 ---------------------
  // => 각 위치로 이동하도록 area에 이벤트 부여필요

  // 3. 텍스트 입력 후 전송 버튼 누르면 채팅 전송
  const [text, setText] = useState('');
  const insertTry = () => {
    alert('버튼 클릭');
    let board = {
      title: text
    };
    axios.post('/api/board/write', null, { params: board });
  };

  // 4. 도서 추천 버튼 클릭

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={12} md={12}></Grid>

        <Grid item xs={12} textAlign="center">
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              id="exit-test"
              onClick={myroomClicked}
              // style={`background : url(${theimg}); width : 100px`}
              variant="outlined"
              sx={{
                // cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              // disabled
            >
              ㅇㅇㅇ 의 방
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
      </Grid>
      <FormControl fullWidth>
        <img src={theimg} alt="tlqkf" useMap="#image-map" />

        <Button id="chat-btn" onClick={insertTry}>
          전송
        </Button>

        <map name="image-map">
          <area
            target="_self"
            alt="마이페이지 / 고객센터 이용하기"
            title="마이페이지 / 고객센터 이용하기"
            coords="101,423,226,506"
            shape="rect"
            nohref
            onClick={() => {
              alert('책상');
            }}
          />
          <area
            target="_self"
            alt="책장 구경하기"
            title="책장 구경하기"
            coords="256,292,390,441"
            shape="rect"
            nohref
            onClick={() => {
              alert('책장');
            }}
          />
          <area
            target="_self"
            alt="달력보기"
            title="달력보기"
            coords="407,240,465,343"
            shape="rect"
            nohref
            onClick={() => {
              alert('달력');
            }}
          />
          <area
            target="_self"
            alt="도서관으로 외출"
            title="도서관으로 외출"
            coords="493,292,606,480"
            shape="rect"
            nohref
            onClick={() => {
              alert('도서관');
            }}
          />
        </map>

        <Grid item xs={12}>
          <TextareaAutosize
            fullWidth
            maxRows={3}
            placeholder="3줄까지만 늘어나는 textarea"
            id="text"
            name="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></TextareaAutosize>
        </Grid>
      </FormControl>
    </>
  );
};

export default MainPage;

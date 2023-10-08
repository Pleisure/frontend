import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import axios from 'axios';

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

// 신고버튼 누르면 해당 데이터가 서버로 전송되는 fetch 함수 (나중에 수정)
function reportAxios() {
  axios
    .post('/report', {
      // 해당 리뷰 아이디 / 신고 종류 / 신고 이유
      storeReviewId: 3,
      reportContent: '주제와 맞지 않아요',
      reportReason: '이러쿵 저러쿵 어쩌구 저쩌구', // 기타의 textarea에 들어갈 내용
    })
    .then((res) => console.log(res));
}

export default function Modal({ showModal, setShowModal }: ModalProps) {
  const [showTextArea, setShowTextArea] = useState<boolean>(false);

  return (
    <div className="relative max-w-md w-[70%] z-[101]">
      {showModal ? (
        <div className="fixed top-[50%] left-[50%] -translate-x-[48%] -translate-y-[50%] bg-white rounded-lg px-7 pb-8 pt-9">
          <h2 className="mb-5 text-xl font-bold">리뷰 신고하기</h2>
          <div
            className="absolute right-4 top-[1.15rem] XBtn opacity-[30%]"
            onClick={() => {
              setShowModal(false);
              setShowTextArea(false);
            }}
          >
            <Icon
              className="w-5 h-5 cursor-pointer closeBtn"
              viewBox="0 0 20 20"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              pathD="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            />
          </div>
          <ul>
            {REPORT_MODAL_DATA.map(({ id, name, content }) => {
              return (
                <li key={id} className="flex items-center my-3">
                  <input
                    type="radio"
                    name="radio"
                    id={name}
                    className="w-5 h-5 radioBtn"
                    onChange={(e) => {
                      if (name === 'radio-6' && e.target.checked) {
                        setShowTextArea(true);
                      } else {
                        setShowTextArea(false);
                      }
                    }}
                  />
                  <label htmlFor={name} className="ml-2 cursor-pointer">
                    {content}
                  </label>
                </li>
              );
            })}
            {showTextArea ? (
              <textarea
                className={`etcTxtArea w-full h-32 border-[1.5px] rounded-md border-grayBg resize-none p-3 text-sm focus:outline-cyanTxt`}
              ></textarea>
            ) : (
              ''
            )}
          </ul>
          <Button
            divStyle={`w-full rounded-md bg-[#D83C3C] text-center cursor-pointer ${
              showTextArea ? 'mt-1' : 'mt-5'
            }`}
            buttonStyle="text-white py-3"
            content="신고하기"
            linkHref="#"
            // onClick={reportAxios}
          />
        </div>
      ) : (
        ''
      )}
      <style jsx>
        {`
          input[type='radio'] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border: 2px solid #ccc;
            border-radius: 50%;
            outline: none;
            cursor: pointer;
          }

          input[type='radio']:checked {
            box-shadow: 0 0 0 1.6px #22d3ee;
            background-color: #22d3ee;
            border: 3px solid white;
          }
        `}
      </style>
    </div>
  );
}

// 임시 데이터
const REPORT_MODAL_DATA = [
  { id: 1, name: 'radio-1', content: '주제와 맞지 않아요' },
  { id: 2, name: 'radio-2', content: '정보가 실제와는 달라요' },
  { id: 3, name: 'radio-3', content: '같은 글로 도배가 되어있어요' },
  { id: 4, name: 'radio-4', content: '과도한 욕설이나 비방을 했어요' },
  {
    id: 5,
    name: 'radio-5',
    content: '외설적인 내용이나 사진이 포함되어 있어요',
  },
  { id: 6, name: 'radio-6', content: '기타' },
];

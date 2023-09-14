import React from "react";
import "./Benefits.css";
import Card from "./Card/Card";
import Testimonial from "./Testimonial/Testimonial";
import downloadImage from "../../assets/img/downloadBg.png";

const Benefits = () => {
  const cardIcons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M73.0855 31.4384H7.28526C4.16782 31.4384 2.83177 28.0002 5.28119 26.3656L38.1813 4.55257C38.7888 4.19078 39.4807 4 40.1854 4C40.8901 4 41.582 4.19078 42.1895 4.55257L75.0896 26.3656C77.539 28.0002 76.203 31.4384 73.0855 31.4384Z"
        stroke="#5D55FF"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M73.5858 62.4389H6.78343C5.24618 62.4389 4 63.7007 4 65.2571V73.7118C4 75.2683 5.24618 76.53 6.78343 76.53H73.5858C75.123 76.53 76.3692 75.2683 76.3692 73.7118V65.2571C76.3692 63.7007 75.123 62.4389 73.5858 62.4389Z"
        stroke="#5D55FF"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.3503 31.4384V62.4389M26.2674 31.4384V62.4389M40.1846 31.4384V62.4389M54.1017 31.4384V62.4389M68.0189 31.4384V62.4389"
        stroke="#5D55FF"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M14.7683 17.7207V44.1114C14.7683 58.4783 26.156 70.1223 40.2015 70.1223C54.247 70.1223 65.6347 58.4783 65.6347 44.1114V17.735L40.0487 9.1333L14.7683 17.7207ZM40.0416 4L70.403 14.2027V44.1114C70.403 61.1692 56.8798 75 40.2015 75C23.5232 75 10 61.1692 10 44.1114V14.2027L40.0416 4ZM55.7428 27.0217C55.5109 26.8089 55.2384 26.6449 54.9417 26.5395C54.645 26.4341 54.33 26.3896 54.0157 26.4085C53.7013 26.4273 53.394 26.5093 53.112 26.6494C52.83 26.7896 52.5792 26.985 52.3745 27.2241L37.0392 44.864L27.1331 33.9123C26.9237 33.6779 26.6692 33.4879 26.3848 33.3538C26.1004 33.2196 25.7918 33.144 25.4776 33.1314C25.1633 33.1188 24.8497 33.1695 24.5555 33.2805C24.2612 33.3915 23.9923 33.5605 23.7648 33.7774C23.2989 34.2223 23.0247 34.8309 23.0001 35.4743C22.9756 36.1177 23.2027 36.7454 23.6333 37.2244L35.3231 50.1464C35.5457 50.3965 35.8194 50.5961 36.1257 50.7316C36.432 50.8671 36.7638 50.9355 37.0988 50.9321C37.4338 50.9288 37.7642 50.8537 38.0677 50.7121C38.3712 50.5704 38.6408 50.3655 38.8584 50.111L55.9382 30.4652C56.3598 29.9784 56.5751 29.3467 56.5386 28.704C56.5021 28.0612 56.2167 27.4579 55.7428 27.0217Z"
        fill="#1D1C31"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M5 5V67.2222C5 69.285 5.81944 71.2633 7.27806 72.7219C8.73667 74.1806 10.715 75 12.7778 75H75"
        stroke="#1D1C31"
        stroke-width="4"
        stroke-miterlimit="5.759"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5555 47.7778L36.111 32.2222L51.6666 47.7778L74.9999 24.4445"
        stroke="#1D1C31"
        stroke-width="4"
        stroke-miterlimit="5.759"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M63.3333 24.4445H75V36.1111"
        stroke="#1D1C31"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>,
  ];

  const testimonialUsers = [
    { image: "img", name: "name", date: "date", stars: "stars" },
  ];

  return (
    <div id="benefits">
      <div className="subTitle">Our Key Benefits</div>
      <div className="cardList">
        <Card
          icon={cardIcons[0]}
          title="Financial Services"
          description="Banks provide a wide range of financial services, including checking and savings accounts, loans, credit cards, and investment production..."
        />
        <Card
          icon={cardIcons[1]}
          title={"Safety and Security"}
          description={
            "Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC....."
          }
        />
        <Card
          icon={cardIcons[2]}
          title={"Economic Stability"}
          description={
            "Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC....."
          }
        />
      </div>
      <div className="downloadSection">
        <img src={downloadImage} className="downloadImg"></img>
        <div className="downloadContent">
          <div className="downloadTitle">
            Ready for the future? Download The App!
          </div>
          <div className="downloadDesc">
            Download the banking app to easily manage your finances, check
            account balances, transfer money, pay bills, and access a range of
            banking services from your mobile device.
          </div>
          <div className="osList">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="176"
              height="52"
              viewBox="0 0 176 52"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="174.5"
                height="51"
                rx="7.5"
                fill="black"
              />
              <path
                d="M88.5781 28.2776C85.5205 28.2776 83.0284 30.602 83.0284 33.8065C83.0284 36.9902 85.5205 39.3354 88.5781 39.3354C91.6357 39.3354 94.1278 36.9902 94.1278 33.8065C94.1278 30.602 91.6357 28.2776 88.5781 28.2776ZM88.5781 37.1579C86.9024 37.1579 85.4568 35.776 85.4568 33.8065C85.4568 31.8162 86.9024 30.4551 88.5781 30.4551C90.2538 30.4551 91.6981 31.8162 91.6981 33.8065C91.6981 35.7747 90.2538 37.1579 88.5781 37.1579ZM76.4699 28.2776C73.4123 28.2776 70.9202 30.602 70.9202 33.8065C70.9202 36.9902 73.4123 39.3354 76.4699 39.3354C79.5275 39.3354 82.0196 36.9902 82.0196 33.8065C82.0209 30.602 79.5275 28.2776 76.4699 28.2776ZM76.4699 37.1579C74.7942 37.1579 73.3499 35.776 73.3499 33.8065C73.3499 31.8162 74.7955 30.4551 76.4699 30.4551C78.1456 30.4551 79.5899 31.8162 79.5899 33.8065C79.5912 35.7747 78.1456 37.1579 76.4699 37.1579ZM62.0685 32.3193H67.6819C67.5142 33.6388 67.0748 34.6021 66.404 35.2729C65.5876 36.0893 64.3097 36.9902 62.0685 36.9902C58.6131 36.9902 55.9117 34.2043 55.9117 30.7489C55.9117 27.2935 58.6131 24.5076 62.0685 24.5076C63.9327 24.5076 65.2938 25.2408 66.2987 26.1833L67.9536 24.5284C66.5509 23.1881 64.6867 22.1611 62.0685 22.1611C57.3352 22.1611 53.3559 26.0143 53.3559 30.7476C53.3559 35.4809 57.3352 39.3341 62.0685 39.3341C64.623 39.3341 66.5509 38.4969 68.0589 36.9252C69.6085 35.3756 70.0908 33.1968 70.0908 31.4379C70.0908 30.8932 70.0492 30.3901 69.9647 29.9715H62.0685V32.3193ZM120.969 31.7954C120.509 30.5591 119.105 28.2763 116.236 28.2763C113.387 28.2763 111.021 30.5175 111.021 33.8052C111.021 36.9044 113.366 39.3341 116.509 39.3341C119.042 39.3341 120.509 37.7845 121.116 36.8836L119.231 35.6265C118.603 36.5482 117.744 37.1553 116.509 37.1553C115.272 37.1553 114.393 36.5898 113.828 35.4796L121.221 32.422L120.969 31.7954ZM113.429 33.6388C113.366 31.5029 115.084 30.4135 116.319 30.4135C117.282 30.4135 118.098 30.8945 118.371 31.5861L113.429 33.6388ZM107.418 39H109.847V22.7487H107.418V39ZM103.438 29.5126H103.355C102.81 28.8639 101.764 28.2763 100.444 28.2763C97.6794 28.2763 95.1457 30.706 95.1457 33.826C95.1457 36.9252 97.6794 39.3341 100.444 39.3341C101.764 39.3341 102.81 38.7478 103.355 38.077H103.438V38.8726C103.438 40.9877 102.307 42.1187 100.485 42.1187C98.9976 42.1187 98.0759 41.0501 97.6989 40.1505L95.5838 41.0306C96.1909 42.497 97.8042 44.2975 100.485 44.2975C103.333 44.2975 105.742 42.6218 105.742 38.5385V28.6117H103.438V29.5126ZM100.654 37.1579C98.9781 37.1579 97.5754 35.7552 97.5754 33.8273C97.5754 31.8799 98.9781 30.4551 100.654 30.4551C102.309 30.4551 103.606 31.8786 103.606 33.8273C103.606 35.7539 102.309 37.1579 100.654 37.1579ZM132.349 22.7487H126.537V39H128.961V32.8432H132.348C135.036 32.8432 137.679 30.8971 137.679 27.7966C137.679 24.6961 135.037 22.7487 132.349 22.7487ZM132.411 30.5812H128.961V25.0107H132.411C134.225 25.0107 135.255 26.5122 135.255 27.7966C135.255 29.055 134.225 30.5812 132.411 30.5812ZM147.403 28.2477C145.647 28.2477 143.828 29.0212 143.075 30.7359L145.229 31.6355C145.69 30.7359 146.546 30.4434 147.446 30.4434C148.7 30.4434 149.976 31.1961 149.997 32.5338V32.7015C149.557 32.4506 148.616 32.0736 147.467 32.0736C145.146 32.0736 142.783 33.3489 142.783 35.7331C142.783 37.908 144.686 39.3081 146.818 39.3081C148.45 39.3081 149.348 38.5762 149.912 37.7195H149.995V38.974H152.337V32.7431C152.337 29.8571 150.184 28.2477 147.403 28.2477ZM147.109 37.154C146.315 37.154 145.206 36.7562 145.206 35.7747C145.206 34.5202 146.587 34.0392 147.777 34.0392C148.843 34.0392 149.345 34.2693 149.994 34.5826C149.807 36.088 148.511 37.154 147.109 37.154ZM160.867 28.6026L158.086 35.6486H158.003L155.119 28.6026H152.506L156.833 38.4501L154.366 43.9283H156.896L163.566 28.6026H160.867ZM139.018 39H141.444V22.7487H139.018V39Z"
                fill="white"
              />
              <path
                d="M61.5888 12.7283H57.8084V13.6656H60.6411C60.5644 14.4274 60.2589 15.0267 59.748 15.4622C59.2358 15.8977 58.5819 16.1161 57.8084 16.1161C56.9582 16.1161 56.2393 15.8223 55.6517 15.2334C55.0745 14.6341 54.7794 13.8944 54.7794 13C54.7794 12.1069 55.0745 11.3659 55.6517 10.7666C56.2393 10.1789 56.9582 9.88515 57.8084 9.88515C58.2439 9.88515 58.6586 9.96055 59.0395 10.1244C59.4204 10.2882 59.7259 10.517 59.9651 10.8108L60.684 10.0919C60.3577 9.72135 59.943 9.43795 59.4321 9.23125C58.9199 9.02455 58.3856 8.92575 57.8084 8.92575C56.6748 8.92575 55.7167 9.31835 54.9328 10.1023C54.1476 10.8875 53.7563 11.856 53.7563 13C53.7563 14.144 54.1476 15.1138 54.9328 15.8977C55.7167 16.6829 56.6748 17.0742 57.8084 17.0742C58.9953 17.0742 59.943 16.6933 60.6736 15.9198C61.3158 15.2776 61.6434 14.4053 61.6434 13.3159C61.6434 13.1313 61.6213 12.935 61.5888 12.7283Z"
                fill="white"
              />
              <path
                d="M63.0812 9.09995V16.9H67.6351V15.9419H64.0835V13.4693H67.2854V12.532H64.0835V10.0594H67.6351V9.09995H63.0812Z"
                fill="white"
              />
              <path
                d="M74.0389 10.0594V9.09995H68.679V10.0594H70.8578V16.9H71.8601V10.0594H74.0389Z"
                fill="white"
              />
              <path
                d="M78.9203 9.09995H77.918V16.9H78.9203V9.09995Z"
                fill="white"
              />
              <path
                d="M85.5438 10.0594V9.09995H80.1839V10.0594H82.3627V16.9H83.365V10.0594H85.5438Z"
                fill="white"
              />
              <path
                d="M95.6865 10.114C94.913 9.31835 93.9653 8.92575 92.8317 8.92575C91.6994 8.92575 90.7504 9.31835 89.9769 10.1023C89.2034 10.8758 88.8225 11.8456 88.8225 13C88.8225 14.1557 89.2034 15.1242 89.9769 15.8977C90.7504 16.6829 91.6994 17.0742 92.8317 17.0742C93.9536 17.0742 94.913 16.6829 95.6865 15.8977C96.46 15.1242 96.8409 14.1557 96.8409 13C96.8409 11.856 96.46 10.8875 95.6865 10.114ZM90.6971 10.7666C91.2743 10.1789 91.9815 9.88515 92.8317 9.88515C93.6819 9.88515 94.3891 10.1789 94.9559 10.7666C95.5331 11.3451 95.8165 12.0965 95.8165 13C95.8165 13.9048 95.5331 14.6562 94.9559 15.2334C94.3891 15.8223 93.6819 16.1161 92.8317 16.1161C91.9815 16.1161 91.2743 15.8223 90.6971 15.2334C90.1303 14.6458 89.8469 13.9048 89.8469 13C89.8469 12.0965 90.1303 11.3555 90.6971 10.7666Z"
                fill="white"
              />
              <path
                d="M99.2485 12.0419L99.2056 10.5378H99.2485L103.215 16.9H104.26V9.09995H103.258V13.6656L103.302 15.1684H103.258L99.4669 9.09995H98.2475V16.9H99.2485V12.0419Z"
                fill="white"
              />
              <path
                d="M26.9325 25.2516L13.0914 39.9416C13.0927 39.9442 13.0927 39.9468 13.094 39.9494C13.5178 41.5458 14.9751 42.7197 16.7041 42.7197C17.3957 42.7197 18.0444 42.5325 18.6008 42.2049L18.645 42.1789L34.2242 33.1894L26.9325 25.2516Z"
                fill="#EB4335"
              />
              <path
                d="M40.9364 22.7505L40.9234 22.7414L34.1972 18.8414L26.6195 25.5845L34.2232 33.1869L40.9143 29.3272C42.0869 28.6941 42.8825 27.4578 42.8825 26.0317C42.8825 24.616 42.0973 23.3849 40.9364 22.7505Z"
                fill="#FABC13"
              />
              <path
                d="M13.0919 12.0605C13.0087 12.3673 12.9645 12.6884 12.9645 13.0225V38.9796C12.9645 39.3137 13.0069 39.6361 13.0914 39.9416L27.4088 25.6273L13.0919 12.0605Z"
                fill="#547DBF"
              />
              <path
                d="M27.0339 26.0005L34.1982 18.8388L18.6359 9.81679C18.0704 9.47749 17.4113 9.28249 16.7041 9.28249C14.9751 9.28249 13.5165 10.459 13.0914 12.0567L13.0919 12.0605L27.0339 26.0005Z"
                fill="#30A851"
              />
              <rect
                x="0.5"
                y="0.5"
                width="174.5"
                height="51"
                rx="7.5"
                stroke="#A6A6A6"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="157"
              height="52"
              viewBox="0 0 157 52"
              fill="none"
            >
              <rect
                x="1"
                y="0.5"
                width="155"
                height="51"
                rx="7.5"
                fill="black"
              />
              <path
                d="M32.701 26.391C32.7149 25.3059 33.0032 24.242 33.5388 23.2983C34.0744 22.3545 34.8401 21.5616 35.7645 20.9933C35.1772 20.1546 34.4025 19.4644 33.5018 18.9774C32.6012 18.4905 31.5993 18.2203 30.576 18.1883C28.393 17.9592 26.2766 19.4946 25.1642 19.4946C24.0303 19.4946 22.3175 18.2111 20.4732 18.249C19.2802 18.2875 18.1175 18.6345 17.0985 19.2559C16.0795 19.8774 15.2388 20.7522 14.6584 21.7952C12.1442 26.1482 14.0195 32.5455 16.4279 36.0641C17.6329 37.7871 19.0412 39.7117 20.8838 39.6434C22.687 39.5686 23.3605 38.4936 25.5371 38.4936C27.6935 38.4936 28.3253 39.6434 30.2054 39.6C32.1403 39.5686 33.3593 37.8694 34.522 36.1301C35.3878 34.9025 36.054 33.5456 36.496 32.1099C35.3719 31.6344 34.4126 30.8386 33.7377 29.8216C33.0628 28.8046 32.7023 27.6115 32.701 26.391Z"
                fill="white"
              />
              <path
                d="M29.1498 15.8742C30.2048 14.6078 30.7246 12.9799 30.5987 11.3364C28.9869 11.5057 27.4981 12.276 26.4289 13.4939C25.9061 14.0889 25.5057 14.7811 25.2506 15.5309C24.9954 16.2807 24.8906 17.0734 24.942 17.8637C25.7482 17.872 26.5458 17.6973 27.2746 17.3527C28.0035 17.0081 28.6447 16.5026 29.1498 15.8742Z"
                fill="white"
              />
              <path
                d="M55.4932 35.2816H49.3398L47.8621 39.6449H45.2557L51.0842 23.5015H53.7921L59.6205 39.6449H56.9697L55.4932 35.2816ZM49.9771 33.2681H54.8547L52.4502 26.1866H52.3829L49.9771 33.2681Z"
                fill="white"
              />
              <path
                d="M72.2079 33.7607C72.2079 37.4182 70.2503 39.7681 67.2961 39.7681C66.5477 39.8072 65.8035 39.6348 65.1485 39.2707C64.4936 38.9065 63.9545 38.3652 63.5929 37.7089H63.537V43.5386H61.121V27.8751H63.4595V29.8327H63.504C63.8822 29.1795 64.4305 28.6411 65.0904 28.2747C65.7503 27.9083 66.4972 27.7276 67.2516 27.752C70.2388 27.752 72.2079 30.1133 72.2079 33.7607ZM69.7247 33.7607C69.7247 31.3778 68.4932 29.8111 66.6143 29.8111C64.7684 29.8111 63.5268 31.4108 63.5268 33.7607C63.5268 36.1321 64.7684 37.7203 66.6143 37.7203C68.4932 37.7203 69.7247 36.1651 69.7247 33.7607Z"
                fill="white"
              />
              <path
                d="M85.1622 33.7607C85.1622 37.4182 83.2046 39.7681 80.2504 39.7681C79.502 39.8072 78.7578 39.6348 78.1028 39.2707C77.4479 38.9065 76.9088 38.3652 76.5471 37.7089H76.4912V43.5386H74.0753V27.8751H76.4138V29.8327H76.4582C76.8365 29.1795 77.3847 28.6411 78.0446 28.2747C78.7046 27.9083 79.4515 27.7276 80.2059 27.752C83.1931 27.752 85.1622 30.1133 85.1622 33.7607ZM82.679 33.7607C82.679 31.3778 81.4475 29.8111 79.5686 29.8111C77.7227 29.8111 76.4811 31.4108 76.4811 33.7607C76.4811 36.1321 77.7227 37.7203 79.5686 37.7203C81.4475 37.7203 82.679 36.1651 82.679 33.7607Z"
                fill="white"
              />
              <path
                d="M93.7239 35.147C93.9029 36.7479 95.4581 37.799 97.5833 37.799C99.6196 37.799 101.085 36.7478 101.085 35.3043C101.085 34.0513 100.201 33.301 98.1089 32.7869L96.0167 32.2829C93.0523 31.5668 91.6761 30.1805 91.6761 27.9309C91.6761 25.1455 94.1035 23.2324 97.5503 23.2324C100.961 23.2324 103.3 25.1455 103.379 27.9309H100.94C100.794 26.3199 99.4622 25.3474 97.516 25.3474C95.5698 25.3474 94.238 26.3313 94.238 27.7633C94.238 28.9046 95.0886 29.5762 97.1694 30.0903L98.948 30.5271C102.26 31.3104 103.636 32.6409 103.636 35.0021C103.636 38.0224 101.231 39.914 97.4042 39.914C93.8242 39.914 91.407 38.0668 91.2508 35.1469L93.7239 35.147Z"
                fill="white"
              />
              <path
                d="M108.85 25.0897V27.8751H111.089V29.7883H108.85V36.2769C108.85 37.2849 109.299 37.7546 110.282 37.7546C110.548 37.75 110.813 37.7313 111.077 37.6987V39.6005C110.635 39.6831 110.185 39.7205 109.735 39.7122C107.352 39.7122 106.423 38.8171 106.423 36.5345V29.7883H104.712V27.8751H106.423V25.0897H108.85Z"
                fill="white"
              />
              <path
                d="M112.385 33.7607C112.385 30.0574 114.566 27.7304 117.967 27.7304C121.379 27.7304 123.55 30.0574 123.55 33.7607C123.55 37.474 121.391 39.7909 117.967 39.7909C114.544 39.7909 112.385 37.474 112.385 33.7607ZM121.089 33.7607C121.089 31.2203 119.925 29.721 117.967 29.721C116.009 29.721 114.846 31.2318 114.846 33.7607C114.846 36.3111 116.009 37.799 117.967 37.799C119.925 37.799 121.089 36.3111 121.089 33.7607Z"
                fill="white"
              />
              <path
                d="M125.542 27.8751H127.846V29.8784H127.902C128.058 29.2527 128.425 28.6998 128.94 28.3125C129.456 27.9253 130.089 27.7273 130.733 27.7519C131.012 27.751 131.289 27.7812 131.561 27.8421V30.1018C131.21 29.9944 130.843 29.9451 130.476 29.9559C130.125 29.9416 129.775 30.0035 129.45 30.1373C129.125 30.271 128.833 30.4735 128.594 30.7307C128.355 30.988 128.174 31.2939 128.064 31.6276C127.955 31.9613 127.918 32.3148 127.958 32.6638V39.6449H125.542L125.542 27.8751Z"
                fill="white"
              />
              <path
                d="M142.7 36.188C142.375 38.3246 140.294 39.7909 137.632 39.7909C134.208 39.7909 132.083 37.4969 132.083 33.8165C132.083 30.1247 134.219 27.7304 137.53 27.7304C140.787 27.7304 142.834 29.9673 142.834 33.5359V34.3637H134.522V34.5097C134.483 34.9428 134.537 35.3792 134.681 35.7898C134.824 36.2004 135.053 36.5758 135.352 36.8911C135.652 37.2064 136.015 37.4544 136.418 37.6186C136.82 37.7828 137.253 37.8594 137.688 37.8435C138.259 37.8969 138.832 37.7647 139.321 37.4664C139.811 37.1682 140.191 36.7198 140.406 36.188L142.7 36.188ZM134.533 32.6752H140.417C140.439 32.2857 140.38 31.896 140.244 31.5304C140.108 31.1648 139.898 30.8313 139.626 30.5508C139.355 30.2703 139.029 30.0489 138.669 29.9004C138.308 29.7519 137.92 29.6796 137.53 29.688C137.137 29.6856 136.747 29.7612 136.383 29.9104C136.019 30.0596 135.688 30.2793 135.409 30.5571C135.131 30.8348 134.91 31.165 134.759 31.5285C134.609 31.892 134.532 32.2818 134.533 32.6752Z"
                fill="white"
              />
              <path
                d="M49.6743 11.3503C50.1808 11.314 50.6891 11.3905 51.1624 11.5743C51.6358 11.7582 52.0624 12.0448 52.4116 12.4135C52.7607 12.7823 53.0237 13.2239 53.1815 13.7065C53.3394 14.1892 53.3881 14.7008 53.3242 15.2046C53.3242 17.6827 51.9849 19.1072 49.6743 19.1072H46.8725V11.3503H49.6743ZM48.0773 18.0102H49.5398C49.9017 18.0318 50.2639 17.9725 50.6 17.8365C50.9361 17.7005 51.2376 17.4913 51.4827 17.224C51.7277 16.9568 51.9101 16.6383 52.0165 16.2917C52.1229 15.9451 52.1507 15.5791 52.0979 15.2204C52.1469 14.8631 52.1163 14.4994 52.0082 14.1554C51.9002 13.8113 51.7173 13.4954 51.4729 13.2303C51.2284 12.9652 50.9283 12.7574 50.5941 12.6219C50.2599 12.4864 49.8998 12.4265 49.5398 12.4465H48.0773V18.0102Z"
                fill="white"
              />
              <path
                d="M54.6852 16.1777C54.6484 15.793 54.6924 15.4048 54.8144 15.0381C54.9364 14.6714 55.1336 14.3343 55.3936 14.0483C55.6535 13.7623 55.9703 13.5338 56.3237 13.3775C56.6771 13.2211 57.0593 13.1404 57.4458 13.1404C57.8322 13.1404 58.2144 13.2211 58.5678 13.3775C58.9212 13.5338 59.238 13.7623 59.498 14.0483C59.7579 14.3343 59.9552 14.6714 60.0772 15.0381C60.1992 15.4048 60.2432 15.793 60.2064 16.1777C60.2439 16.5627 60.2004 16.9514 60.0787 17.3187C59.957 17.686 59.7599 18.0237 59.4999 18.3103C59.2399 18.5968 58.9228 18.8258 58.5691 18.9825C58.2153 19.1392 57.8327 19.2201 57.4458 19.2201C57.0589 19.2201 56.6762 19.1392 56.3225 18.9825C55.9687 18.8258 55.6516 18.5968 55.3917 18.3103C55.1317 18.0237 54.9345 17.686 54.8128 17.3187C54.6912 16.9514 54.6477 16.5627 54.6852 16.1777ZM59.0181 16.1777C59.0181 14.9088 58.4481 14.1667 57.4477 14.1667C56.4435 14.1667 55.8786 14.9088 55.8786 16.1777C55.8786 17.4567 56.4435 18.193 57.4477 18.193C58.4481 18.193 59.0181 17.4516 59.0181 16.1777Z"
                fill="white"
              />
              <path
                d="M67.5455 19.1071H66.3471L65.1372 14.7958H65.0458L63.841 19.1071H62.654L61.0405 13.2533H62.2122L63.2609 17.7201H63.3472L64.5507 13.2533H65.659L66.8625 17.7201H66.9539L67.9975 13.2533H69.1528L67.5455 19.1071Z"
                fill="white"
              />
              <path
                d="M70.5099 13.2533H71.622V14.1832H71.7083C71.8548 13.8492 72.1018 13.5692 72.4149 13.3823C72.728 13.1953 73.0917 13.1107 73.4552 13.1403C73.74 13.1189 74.026 13.1618 74.292 13.2659C74.558 13.3701 74.7971 13.5327 74.9917 13.7418C75.1863 13.9509 75.3313 14.2011 75.4161 14.4739C75.5009 14.7466 75.5232 15.035 75.4814 15.3175V19.107H74.3261V15.6076C74.3261 14.6669 73.9173 14.1991 73.0629 14.1991C72.8695 14.1901 72.6765 14.223 72.497 14.2956C72.3175 14.3681 72.1559 14.4787 72.0231 14.6196C71.8904 14.7605 71.7896 14.9284 71.7278 15.1119C71.6661 15.2954 71.6447 15.49 71.6651 15.6825V19.1071H70.5099L70.5099 13.2533Z"
                fill="white"
              />
              <path
                d="M77.3222 10.9681H78.4775V19.1071H77.3222V10.9681Z"
                fill="white"
              />
              <path
                d="M80.0834 16.1777C80.0466 15.7929 80.0907 15.4048 80.2127 15.0381C80.3347 14.6714 80.532 14.3342 80.792 14.0482C81.0519 13.7622 81.3688 13.5337 81.7222 13.3774C82.0757 13.221 82.4579 13.1402 82.8443 13.1402C83.2308 13.1402 83.613 13.221 83.9664 13.3774C84.3199 13.5337 84.6367 13.7622 84.8967 14.0482C85.1566 14.3342 85.3539 14.6714 85.476 15.0381C85.598 15.4048 85.642 15.7929 85.6052 16.1777C85.6427 16.5628 85.5992 16.9514 85.4775 17.3187C85.3558 17.686 85.1586 18.0238 84.8985 18.3103C84.6385 18.5968 84.3214 18.8258 83.9677 18.9825C83.6139 19.1392 83.2313 19.2201 82.8443 19.2201C82.4574 19.2201 82.0748 19.1392 81.721 18.9825C81.3672 18.8258 81.0501 18.5968 80.7901 18.3103C80.5301 18.0238 80.3329 17.686 80.2112 17.3187C80.0895 16.9514 80.046 16.5628 80.0834 16.1777ZM84.4163 16.1777C84.4163 14.9088 83.8463 14.1667 82.8459 14.1667C81.8417 14.1667 81.2768 14.9088 81.2768 16.1777C81.2768 17.4567 81.8418 18.193 82.8459 18.193C83.8463 18.193 84.4163 17.4516 84.4163 16.1777Z"
                fill="white"
              />
              <path
                d="M86.8215 17.4516C86.8215 16.3979 87.606 15.7904 88.9987 15.7041L90.5844 15.6127V15.1074C90.5844 14.4892 90.1756 14.1401 89.3859 14.1401C88.741 14.1401 88.2941 14.3768 88.1659 14.7907H87.0474C87.1655 13.7852 88.1113 13.1403 89.4392 13.1403C90.9068 13.1403 91.7346 13.8709 91.7346 15.1074V19.1071H90.6224V18.2844H90.531C90.3455 18.5795 90.085 18.8201 89.7761 18.9816C89.4672 19.143 89.1209 19.2196 88.7727 19.2035C88.527 19.2291 88.2786 19.2029 88.0436 19.1266C87.8086 19.0503 87.5922 18.9256 87.4084 18.7605C87.2246 18.5954 87.0774 18.3937 86.9763 18.1683C86.8752 17.9428 86.8224 17.6987 86.8215 17.4516ZM90.5844 16.9514V16.462L89.1549 16.5534C88.3487 16.6074 87.9831 16.8816 87.9831 17.3977C87.9831 17.9245 88.4401 18.2311 89.0686 18.2311C89.2527 18.2497 89.4387 18.2312 89.6155 18.1764C89.7923 18.1217 89.9563 18.032 90.0977 17.9126C90.2392 17.7932 90.3551 17.6466 90.4387 17.4815C90.5223 17.3163 90.5718 17.1361 90.5844 16.9514Z"
                fill="white"
              />
              <path
                d="M93.2529 16.1777C93.2529 14.3279 94.2038 13.1562 95.6828 13.1562C96.0486 13.1393 96.4117 13.2269 96.7296 13.4088C97.0475 13.5907 97.307 13.8592 97.4779 14.1832H97.5642V10.9681H98.7195V19.1071H97.6125V18.1822H97.5211C97.337 18.5039 97.0684 18.7692 96.7444 18.9492C96.4203 19.1292 96.0532 19.2172 95.6828 19.2035C94.1936 19.2036 93.2529 18.0318 93.2529 16.1777ZM94.4463 16.1777C94.4463 17.4193 95.0316 18.1664 96.0104 18.1664C96.9841 18.1664 97.5859 17.4085 97.5859 16.1827C97.5859 14.9627 96.9778 14.194 96.0104 14.194C95.0379 14.194 94.4463 14.9462 94.4463 16.1777Z"
                fill="white"
              />
              <path
                d="M103.499 16.1777C103.462 15.793 103.506 15.4048 103.628 15.0381C103.75 14.6714 103.948 14.3343 104.208 14.0483C104.468 13.7623 104.784 13.5338 105.138 13.3775C105.491 13.2211 105.873 13.1404 106.26 13.1404C106.646 13.1404 107.029 13.2211 107.382 13.3775C107.735 13.5338 108.052 13.7623 108.312 14.0483C108.572 14.3343 108.769 14.6714 108.891 15.0381C109.013 15.4048 109.057 15.793 109.02 16.1777C109.058 16.5627 109.014 16.9514 108.893 17.3187C108.771 17.686 108.574 18.0237 108.314 18.3103C108.054 18.5968 107.737 18.8258 107.383 18.9825C107.029 19.1392 106.647 19.2201 106.26 19.2201C105.873 19.2201 105.49 19.1392 105.137 18.9825C104.783 18.8258 104.466 18.5968 104.206 18.3103C103.946 18.0237 103.749 17.686 103.627 17.3187C103.505 16.9514 103.462 16.5627 103.499 16.1777ZM107.832 16.1777C107.832 14.9088 107.262 14.1667 106.262 14.1667C105.258 14.1667 104.693 14.9088 104.693 16.1777C104.693 17.4567 105.258 18.193 106.262 18.193C107.262 18.193 107.832 17.4516 107.832 16.1777Z"
                fill="white"
              />
              <path
                d="M110.571 13.2533H111.683V14.1832H111.769C111.915 13.8492 112.162 13.5692 112.476 13.3823C112.789 13.1953 113.152 13.1107 113.516 13.1403C113.801 13.1189 114.087 13.1618 114.353 13.2659C114.619 13.3701 114.858 13.5327 115.052 13.7418C115.247 13.9509 115.392 14.2011 115.477 14.4739C115.562 14.7466 115.584 15.035 115.542 15.3175V19.107H114.387V15.6076C114.387 14.6669 113.978 14.1991 113.124 14.1991C112.93 14.1901 112.737 14.223 112.558 14.2956C112.378 14.3681 112.217 14.4787 112.084 14.6196C111.951 14.7605 111.85 14.9284 111.789 15.1119C111.727 15.2954 111.705 15.49 111.726 15.6825V19.1071H110.571V13.2533Z"
                fill="white"
              />
              <path
                d="M122.07 11.7959V13.2799H123.338V14.253H122.07V17.2631C122.07 17.8763 122.323 18.1448 122.898 18.1448C123.045 18.1443 123.192 18.1354 123.338 18.1181V19.0804C123.131 19.1175 122.921 19.1373 122.71 19.1395C121.425 19.1395 120.913 18.6875 120.913 17.5589V14.253H119.984V13.2799H120.913V11.7959H122.07Z"
                fill="white"
              />
              <path
                d="M124.916 10.9681H126.061V14.194H126.153C126.306 13.8569 126.56 13.5753 126.88 13.3877C127.199 13.2 127.568 13.1154 127.938 13.1454C128.221 13.1299 128.504 13.1772 128.767 13.2839C129.03 13.3906 129.266 13.5539 129.459 13.7624C129.652 13.9708 129.796 14.2192 129.881 14.4898C129.967 14.7603 129.992 15.0464 129.954 15.3277V19.1071H128.797V15.6127C128.797 14.6777 128.362 14.2041 127.546 14.2041C127.347 14.1878 127.147 14.2151 126.96 14.2841C126.773 14.3531 126.604 14.4621 126.463 14.6034C126.323 14.7448 126.215 14.9151 126.148 15.1025C126.08 15.2899 126.054 15.4898 126.072 15.6882V19.1071H124.916L124.916 10.9681Z"
                fill="white"
              />
              <path
                d="M136.69 17.5265C136.533 18.0615 136.193 18.5243 135.729 18.8339C135.265 19.1435 134.708 19.2802 134.153 19.2201C133.768 19.2302 133.384 19.1564 133.03 19.0036C132.676 18.8508 132.359 18.6228 132.102 18.3353C131.845 18.0478 131.653 17.7078 131.54 17.3388C131.428 16.9698 131.397 16.5808 131.449 16.1986C131.398 15.8152 131.43 15.4253 131.542 15.0553C131.654 14.6852 131.845 14.3436 132.101 14.0536C132.357 13.7636 132.672 13.532 133.025 13.3744C133.379 13.2168 133.762 13.137 134.148 13.1403C135.777 13.1403 136.76 14.2531 136.76 16.0913V16.4944H132.626V16.5591C132.608 16.774 132.635 16.9902 132.705 17.194C132.776 17.3977 132.888 17.5846 133.035 17.7425C133.182 17.9004 133.36 18.0258 133.558 18.1108C133.756 18.1959 133.97 18.2385 134.185 18.2361C134.461 18.2693 134.741 18.2196 134.989 18.0932C135.237 17.9668 135.442 17.7696 135.578 17.5265L136.69 17.5265ZM132.626 15.64H135.583C135.597 15.4435 135.571 15.2462 135.504 15.0607C135.438 14.8751 135.334 14.7055 135.198 14.5627C135.062 14.4199 134.898 14.307 134.717 14.2314C134.535 14.1558 134.339 14.119 134.142 14.1235C133.942 14.121 133.744 14.1586 133.559 14.2339C133.374 14.3092 133.206 14.4208 133.064 14.5622C132.923 14.7035 132.811 14.8717 132.736 15.0568C132.661 15.2419 132.624 15.4402 132.626 15.64Z"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="155"
                height="51"
                rx="7.5"
                stroke="#A6A6A6"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonialsTitle">What Our Clients Say About Us</div>
        <div className="testimonialsList">
          <Testimonial User={testimonialUsers[0]} />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Benefits;

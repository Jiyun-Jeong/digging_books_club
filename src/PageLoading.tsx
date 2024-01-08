// import styled from "@emotion/styled";
// import Image from "next/image";
// import React from "react";

// const FullScreenBlock = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	z-index: 2000;
// 	width: 100%;
// 	height: 100vh;
// 	cursor: wait;

// 	img {
// 		position: relative;
// 		z-index: 2001;
// 	}

// 	&:before {
// 		content: "";
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		background-color: #000000;
// 		opacity: 0.8;
// 		width: 100%;
// 		height: 100vh;
// 	}
// `;

// export default function PageLoading(props) {
//     return (
//         <FullScreenBlock {...props}>
//             <Image
//                 src="/img/loading.gif"
//                 alt="로딩중입니다"
//                 width={100}
//                 height={50}
//             />
//         </FullScreenBlock>
//     )
// }
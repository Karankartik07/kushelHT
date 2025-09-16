import React from 'react'
import Head from "next/head";
// import { Script } from 'vm';
export default function HeadSEO(props) {
  return (
    <>
      <Head>
        <title>{props?.title}</title>
      </Head>
    </>
  )
}
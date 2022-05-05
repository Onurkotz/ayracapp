import React from 'react'
import "./adding.css";

function Adding() {
  return (
    <div>
      <div className="main">
      <input name="bookName" placeholder="Kitap Adı"/>
      <input name="author" placeholder="Yazar"/>
      <input name="genre" placeholder="Tür"/>
      <input name="page" placeholder="Sayfa Sayısı"/>

      </div>
    </div>
  )
}

export default Adding
/**
 * {
 * "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
 */

import React from 'react'

export default function User(props) {
  return (
  <div class="max-w-sm  mt-7 ml-5 rounded overflow-hidden shadow-lg  h-24 bg-gradient-to-r from-teal-400 to-blue-500 h-60">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.name}</div>
    <p class="text-gray-700 text-base">
      <ul>
        <li>
        {props.username}
        </li>
        <li>
        {props.email}
        </li>
      </ul>
      <hr/>
      <h2>Address:</h2>
        Straße: {props.street} 
        <br />
        Haus: {props.suite}
        <br />
        PLZ: {props.zipcode}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  )
}


import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { increment, incrementAsync, selectCount } from "./counterSlice"
import styles from "./Counter.module.css"

export default function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div></div>
    </div>
  )
}

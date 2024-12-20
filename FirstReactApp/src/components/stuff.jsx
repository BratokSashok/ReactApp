import React, {useLayoutEffect, useEffect } from "react"

useLayoutEffect(() => {
    window.title = "test title using useLayoutEffect"
}, [])

useEffect(() => {
    window.title = "test title using useEffect"
}, [])
const observer = new PerformanceObserver((list) => {
    console.log(list)
    for (const entry of list.getEntries()) {
        console.log(entry)

    }
})
observer.observe({ entryTypes: ["paint", "longtask", "render loaded"] })
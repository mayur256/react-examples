self.onmessage = (event) => {
    const messagePayload = event.data;
    
    if (messagePayload.type === "filter") {
        filterData(messagePayload);
    } else {
        sortData(messagePayload);
    }
}

const filterData = (payload) => {
    const { items, searchKey } = payload.data;
    const filteredData = items.filter((user) => {
        return (user.name.toLocaleLowerCase().includes(searchKey)
            || user.email.toLocaleLowerCase().includes(searchKey)
            || user.address.toLocaleLowerCase().includes(searchKey)
            || user.zodiac.toLocaleLowerCase().includes(searchKey)
        )
    });
    
    self.postMessage({ type: "filter", data: filteredData });
}

const sortData = (payload) => {
    const { items, newVal } = payload.data;

    const sortedData = items.toSorted((a, b) => {
        if (newVal.value === "age") {
            return a.age - b.age;
        }

        const key = newVal.value;

        return a[key].localeCompare(b[key], 'en')
    });

    self.postMessage({ type: "sort", data: sortedData });
}
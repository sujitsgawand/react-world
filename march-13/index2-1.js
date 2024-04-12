let counter = 0;

const getData = () => {
  console.log("Fetching data... " + counter++);
};


const debouncingImpl = (fn, d) => {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout( () => {
            getData.apply(context, arguments);
        }, d);
    }
}

const debounce = debouncingImpl(getData, 500);

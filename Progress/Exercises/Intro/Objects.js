const inputObj = {name: 'john', age: 25, city: 'new York'};

    const capitalizeStrings = (object) => {
        const copyObject = {};
        for(let key in object) {
            if (typeof object[key] === 'string') {
                copyObject[key] = object[key].toUpperCase();
            } else {
                copyObject[key] = object[key];
            }
        }
        console.log(copyObject);
    }

capitalizeStrings(inputObj);
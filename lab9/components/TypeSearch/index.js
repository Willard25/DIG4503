class TypeSearch extends React.Component {

    readType(event) {
        event.preventDefault();
        let element = document.querySelector("#TYPE");
        fetch("/api/pokemon/type/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("#reportingArea");
            
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.type;
            }
        });

        element.value = "";
    }

    render() {
        return(
            <div>   
                <form onSubmit={this.readType}>
                    <input id="TYPE" type="text" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}

export default TypeSearch;
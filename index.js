let postsdata = "";

async function clickhandler(element) {
    try {

        const data = await fetch(
            "https://jsonplaceholder.typicode.com/posts/" + element.dataset.id
        );
        const response = await data.json();
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}


const fetchalldata = async() => {
    try {

        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await data.json();

        response.forEach((post, index) => {
            if (index >= 10) {
                return;
            } else {
                postsdata += `<li onclick="clickhandler(this)" data-id=${post.id} class='listitem'>${post.title} - ${post.body}-${post.id}</li>`;
            }
        });

        document.body.innerHTML = postsdata;
    } catch (err) {
        console.log(err);
    } finally {
        console.log("finally");
    }

};
fetchalldata();
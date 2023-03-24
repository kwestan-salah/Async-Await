let postsdata = "";

async function clickhandler(element) {
    // console.log(element); agar bes ame bnwsyn awa yhny tenha li'aka le naw console'da printe bke
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + element.dataset.id
    );
    const response = await data.json();
    console.log(response);
}


const fetchalldata = async() => {
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

};
fetchalldata();
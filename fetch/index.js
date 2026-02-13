// fetch() syntax

// const URL = "https://pokeapi.co/api/v2/pokemon";

// // fetch(URL)
// //   .then((response) => response.json())
// //   .then((data) => console.log(data))
// //   .catch((error) => console.error(error));

// // using async/await

// async function fetchDAta(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }

// fetchDAta(URL)

// fetch() Usage: Getting Resources

async function fetchPosts() {
  const URL = "http://localhost:3001/posts";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.error(error);
  }
}

// fetchPosts()

// fetch() Usage: Query Params
async function fetchPostWithComments() {
  const API_URL = "http://localhost:3001/posts";
  const num = 1;

  const queryParams = {
    id: num,
  };

  try {
    const queryString = new URLSearchParams(queryParams).toString();
    const url = `${API_URL}?${queryString}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// fetchPostWithComments()

// fetch() Usage: Creating Resources
// async function createPost(postData) {
//   const API_URL = "http://localhost:3001/posts";

//   try {
//     const response = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     });

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetch() Usage: Updating Resources
async function updatePost(postData) {
  console.log("Replacing a View Data....");

  const API_URL =
    "http://localhost:3001/posts/97a64a5f-a49e-4317-8381-daf28882b658";

  try {
    const response = await fetch(API_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// fetch() Usage: Deleting Resources
async function deletePost() {
  const API_URL = `http://localhost:3001/posts`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const toDelete = data.filter((post) => !("userId" in post));
    console.log("Posts to delete:", toDelete);

    for (const post of toDelete) {
      await fetch(`${API_URL}/${post.id}`, { method: "DELETE" });
      console.log(`Deleted post ${post.id}`);
    }
  } catch (error) {
    console.error(error);
  }
}

const newPostData = {
  id: crypto.randomUUID(),
  title: "How to use fetch() API for Post?",
  views: 0,
};

const newPostData2 = {
  id: crypto.randomUUID(),
  title: "Hellow Word",
  views: 0,
};

const updatePostData = {
  views: 160,
  createdBy: "Adrian",
};


// updateBtn
const updateBtn = document.getElementById("updatePostBtn");

updateBtn.addEventListener("click", () => {
  const postData = { views: 11 }; // partial update
  updatePost(updatePostData); // tatawag lang kapag na-click
});

// deleteBtn
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  deletePost();
});

// Request Object
const request1 = new Request("http://localhost:3001/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newPostData),
});

const request2 = new Request(request1, {
    body: JSON.stringify(newPostData2)
})

async function post(request) {
    try {
        const response = await fetch(request)
        const contentType = response.headers.get('content-type');

        if(!response.ok) throw new Error(`Response Status: ${response.ok}`)
        
        if(!contentType || !contentType.includes('application/json')) throw new TypeError('Oops, we havent got JSON!')

        const data = await response.json()
        console.log('Success',data)
    } catch (error) {
        console.error(error)
    }
}

// Event listener
const btn = document.getElementById("createPostBtn");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // STOP page reload
  post(request2);
});

// 1. Looping with Promises
const ids = ["1", "2", "3", "4", "5"];

const fetchDate = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const loopFetches = () => {
  for (let i = 0; i < ids.length; i++) {
    console.log(`*** Fetching details of ${ids[i]} ***`);

    const response = fetchDate(ids[i]);
    response.then((response) => {
      response.json().then((data) => {
        console.log(
          `
                    Id: ${data?.id}
                    Name: ${data?.name}
                    Company: ${data?.company?.name}
                    Address: ${data?.address?.city}
                    `,
        );
      });
    });
  }
};

// loopFetches()

// console.log('test')

async function loopFetchesAsync() {
  for (let i = 0; i < ids.length; i++) {
    console.log(`*** Fetching details of ${ids[i]} ***`);

    const response = await fetchDate(ids[i]);
    const data = await response.json();

    console.log(
      `
      Id: ${data?.id}
      Name: ${data?.name}
      Company: ${data?.company?.name}
      Address: ${data?.address?.city}
      `,
    );
  }
}

// loopFetchesAsync()
// console.log('test')

async function loopAll() {
  const responses = await Promise.allSettled(ids.map((id) => fetchDate(id)));
  const data = await Promise.allSettled(
    responses.map((response) => response.value.json()),
  );

  data.map((userInfo) => {
    const user = userInfo.value;
    console.log(`*** Fetching details of ${user?.id} ***`);
    console.log(
      `
      Id: ${user?.id}
      Name: ${user?.name}
      Company: ${user?.company?.name}
      Address: ${user?.address?.city}
      `,
    );
  })
}

loopAll();
console.log('test')
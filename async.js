function simpelPromise(){
    return Promise.resolve("Hello World");
}

async function run (){
    const name = await simpelPromise();
    console.info(name);

}


run();

function simpelPromise(){
    return Promise.resolve("Hello World");
}

    const name = await simpelPromise();
    console.info(name);


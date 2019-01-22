const hellowWorld = new Vue({
  // how we tell what html element to attach vue instance to
  el: '#helloWorld',
  // how we provide value to our template variables
  data: {
    title: "Hello, World from my Vue App!",
    subtitle: "Check out this cool subtitle for my Vue App",
    img: {
      src: 'https://placeimg.com/200/200/animals',
      alt: 'Holding a place for my animal photo'
    }
  }
});

const example = new Vue({
  // how we tell what html element to attach vue instance to
  el: '#example',
  // how we provide value to our template variables
  data: {
    title: "Hi",
    subtitle: "Thanks for stopping by.",
    name: "Alex"
  }
});
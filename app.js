const hellowWorld = new Vue({
  // how we tell what html element to attach vue instance to
  el: '#helloWorld',
  // how we provide value to our template variables
  data: {
    title: "Hello, World from my Vue App!",
    subtitle: "Check out this cool subtitle for my Vue App"
  }
});
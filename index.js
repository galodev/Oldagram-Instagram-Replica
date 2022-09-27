const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 12502,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15137,
  },
];

const likeBtn1 = document.getElementById("like-btn1")
const likeBtn2 = document.getElementById("like-btn2")
const likeBtn3 = document.getElementById("like-btn3")


likeBtn1.addEventListener("click", function() {
    addLike(1) 
})

likeBtn2.addEventListener("click", function() {
  addLike(2)
})

likeBtn3.addEventListener("click", function() {
    addLike(3)
})


function addLike(number){
    posts[number - 1].likes++
    document.getElementById(`like-value${number}`).textContent = posts[number-1].likes.toLocaleString("en-US") + " likes"
}

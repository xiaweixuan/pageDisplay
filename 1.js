
const { width } = document.getElementsByClassName("onetext")[0].getBoundingClientRect()
const { width: cwidth } = document.getElementsByClassName("one")[0].getBoundingClientRect()
if (width > cwidth) {
  document.getElementsByClassName("one")[0].style.gridColumn = '1/3'
}

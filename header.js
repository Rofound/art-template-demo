function toggle(pageName, that) {
  console.log(that)
  location.href = pageName
  that.classList.add(location.href.indexOf(pageNameLocal) > -1? 'red': null)
}

window.addEventListener('load', function () {

  that.classList.add(location.href.indexOf(pageNameLocal) > -1? 'red': null)
})

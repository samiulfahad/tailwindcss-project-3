const btn = document.getElementById('btn')
const errMsg = document.getElementById('errMsg')
const form = document.getElementById('form')
const input = document.getElementById('input')
const menuBtn = document.getElementById('menu-btn')
const mobileNav = document.getElementById('mobileNav')

// Validate a URL
function isURL(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

const clickFunc = (e) => {
  e.preventDefault()
  if (input.value == '')
  {
    errMsg.innerText = 'Please insert an URL'
    input.classList.add('border-2')
    input.classList.add('border-red')
  }else if (!isURL(input.value))
  {
    errMsg.innerText = 'Please insert a Valid URL'
    input.classList.add('border-2')
    input.classList.add('border-red')
  } else
  {
    alert('Done')
    input.classList.remove('border-2')
    input.classList.remove('border-red')
    errMsg.innerText = ''
  }
}

btn.addEventListener('click', clickFunc)
menuBtn.addEventListener('click', e => {
  menuBtn.classList.toggle('open')
  mobileNav.classList.toggle('hidden')
  mobileNav.classList.toggle('flex')

})
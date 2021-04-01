// dropdown
document.getElementById('menu').addEventListener('click', showDropdown)
document.getElementById('close').addEventListener('click', hideDropdown)


function showDropdown(){
    document.querySelector('.dropdownContent').style.display = 'block'
}

function hideDropdown(){
    document.querySelector('.dropdownContent').style.display = 'none'
}

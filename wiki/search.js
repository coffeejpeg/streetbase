function search(){
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('sidebar-link')

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].computedStyleMap.display = "none"
            }
        else{
            x[i].style.display = "nav-item"
        }
    }
}
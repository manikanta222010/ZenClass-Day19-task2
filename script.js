function showValues() {
    document.querySelector('.fname').innerHTML = document.querySelector('#fname').value
    document.querySelector('.lname').innerHTML = document.querySelector('#lname').value
    document.querySelector('.email').innerHTML = document.querySelector('#email').value
    document.querySelector('.gender').innerHTML = document.querySelector('input[name="gender"]:checked').value;

    let foodList = [];
    let foods = document.querySelectorAll('input[type=checkbox][name=food]:checked');
    for (let i = 0; i < foods.length; i++) {
        foodList.push(foods[i].value)
    }
    document.querySelector('.food').innerHTML = foodList.join(", ").trim(",")

    document.querySelector('.address').innerHTML = document.querySelector('#address').value
    document.querySelector('.pincode').innerHTML = document.querySelector('#pincode').value

    var state = document.getElementById("state");
    var stateValue = state.options[state.selectedIndex].value;
    document.querySelector('.state').innerHTML = stateValue

    document.querySelector('.country').innerHTML = document.querySelector('#country').value

    return false
}
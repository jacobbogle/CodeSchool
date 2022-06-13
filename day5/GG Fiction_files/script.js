
/*------------------------------------ On load calls ------------------------------------------------------------------------*/

window.addEventListener('load', bookArray());

window.addEventListener('load', displayDropDownConetent());

window.addEventListener('load', bookContentSizing());




/*--------------------------------- Functions -----------------------------------------------------------------------*/

/* Open and close menu, outside clicks close it. */
function displayDropDownConetent() {
    window.addEventListener('mouseup', function(event) {
        const buttonText = document.querySelector('.dropDownButton')
        const menu = document.querySelector('.dropDownButton')
        const menuContent = document.querySelector('.dropDownContent')
        if (event.target != menu && event.target != menuContent){
            menuContent.style.display = 'none'
            buttonText.innerHTML = 'Menu'
        } 
        else if (buttonText.innerHTML === 'Close' && menuContent.style.display === 'block') {
            menuContent.style.display = 'none'
            buttonText.innerHTML = 'Menu'
        } else {
            menuContent.style.display = 'block'
            buttonText.innerHTML = 'Close'
        }
        
    })
};






/* This adds a number to the end of class names for all bookBox, bookContent, and bookImage */
function bookArray() {
    const books = document.querySelectorAll('.bookBox')
    const contents = document.querySelectorAll('.bookContent')
    const images = document.querySelectorAll('.bookImage')
    let countA = 0
    books.forEach(book => {
        countA += 1
        book.setAttribute('class', 'bookBox' + countA)})
    
    let countB = 0
    contents.forEach(content => {
        countB += 1
        content.setAttribute('class', 'bookContent' + countB)})
    
    let countC = 0
    images.forEach(image => {
        countC += 1
        image.setAttribute('class', 'bookImage' + countC)})
};








/* I cant even begin with this, I dont remeber how it worked immediately after I finished it, but it works. 
this opens the books and closes them*/
function bookContentSizing() {
    let arrayOfClickedClassNumbers = []
    window.addEventListener('mouseup', function(event) {
        let clickedTarget = event.target
        let clickedClassNumber = ''


        /* First checks and see's if the last three characters in the clicked DIV or IMG tag(but will not run if clicked begins with bookContent) doesnt contain all numbers, then checks if the last two and if that doesnt it assigns it to clickedClassNumber. 
        This allows the website to have 999 books on webpage max */
        try{
            if (clickedTarget.tagName === 'DIV' || clickedTarget.tagName === 'IMG' ) {
                if (clickedTarget.className != '*bookContent*') {
                    if (String(parseInt(clickedTarget.getAttribute('class').slice(-3))) === 'NaN') {
                        if (String(parseInt(clickedTarget.getAttribute('class').slice(-2))) === 'NaN') {
                        clickedClassNumber = parseInt(clickedTarget.getAttribute('class').slice(-1))
                        } else {
                            clickedClassNumber = parseInt(clickedTarget.getAttribute('class').slice(-2))
                        }
                    } else {
                        clickedClassNumber = parseInt(clickedTarget.getAttribute('class').slice(-3))
                    }
                }
            }
        }
        catch(nul) {null}


        /* Checks if clickedClassNumber is integer, if so appends it to arrayOfClickedClassNumbers. checks if arrayOfClickedClassNumbers is longer than 4, if so deletes the oldest entery. */
        if (Number.isInteger(clickedClassNumber)) {
            arrayOfClickedClassNumbers.push(clickedClassNumber)
        }
        if (arrayOfClickedClassNumbers.length > 4) {
            arrayOfClickedClassNumbers.shift()
        }


        /* Assignments. Now that we created arrayOfClickedClassNumbers and clickedClassNumber */
        let bookContent = document.querySelector('.bookContent' + clickedClassNumber)
        const lastBookClickedBookContent = document.querySelector('.bookContent' + arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1])
        

        /* This is where we get the height of bookBox so that we can apply it to bookContent. */
        let bookWidth = 'null'
        let bookHeight = 'null'
        try {
            bookWidth = document.querySelector('.bookBox'+ clickedClassNumber).clientWidth
            bookHeight = document.querySelector('.bookBox'+ clickedClassNumber).clientHeight
        }
        catch (err) {null}
        const newWidth =  bookWidth + 'px';
        const newHeight = bookHeight *.95 + 'px';


        /* This is the main conditionals for opennings and closings */
        /* Clicks outside books. MOSTLY */
        if ( clickedTarget.tagName.length >= 3 && clickedTarget.className === '' && bookWidth === 'null' && clickedTarget.tagName != 'BUTTON' || clickedTarget.className === 'topBox' ) {
            bookContent = lastBookClickedBookContent
            bookContent.style.visibility = 'hidden'
            bookContent.style.width = '0px'
            bookContent.style.height = '0px'

        /* Closes bookContent if bookBox clicked twice. MOSTLY */
         }else if (arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-2] === arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1] && clickedTarget.tagName === 'IMG') {
            if (lastBookClickedBookContent.style.visibility === 'hidden') {
                bookContent.style.visibility = 'visible'
                bookContent.style.width = newWidth
	            bookContent.style.height = newHeight
            } else if (lastBookClickedBookContent.style.visibility === 'visible') {
                try {
                    bookContent.style.visibility = 'hidden'
                    bookContent.style.width = '0px'
                    bookContent.style.height = '0px'
                } catch (err) {null}   
            } 

        /* Closes the previously openned bookContent. MOSTLY */
        } else if (arrayOfClickedClassNumbers.length >= 2 && arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-2] != arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1] && bookHeight != 'null') {
            bookContent = document.querySelector('.bookContent' + arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-2])
            bookContent.style.visibility = 'hidden'
            bookContent.style.width = '0px'
            bookContent.style.height = '0px'
            bookContent = document.querySelector('.bookContent' + arrayOfClickedClassNumbers[arrayOfClickedClassNumbers.length-1])
            bookContent.style.visibility = 'visible'
            bookContent.style.width = newWidth
	        bookContent.style.height = newHeight

        /* Opens bookContent */
        } else {
            try {
                bookContent.style.visibility = 'visible'
                bookContent.style.width = newWidth
                bookContent.style.height = newHeight
            }
            catch (err) {null}
        }
    })
};
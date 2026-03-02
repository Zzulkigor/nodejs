fetch("/api/books")
    .then(res => res.json())
    .then(books =>{
        const container = document.getElementById("books");

        container.innerHTML = books
            .map(book =>`
                <div class="book">
                <h3>${book.title}</h3>
                <p>Автор: ${book.author}</p>
                <p>Цена: ${book.price} €</p>
                </div>
            `)
    })
    .catch(err => console.error(err))
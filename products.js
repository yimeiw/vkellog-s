const dropdownsKids = document.querySelectorAll('#kids .dropdown');
dropdownsKids.forEach(dropdown => {
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')

            options.forEach(option => {
                option.classList.remove('active')
            })
            option.classList.add('active')

            const selectedCategory = option.classList[0];
            const gambarItems = document.querySelectorAll('.gambar-kids .products');
            const hidden = document.querySelectorAll('.hidden');
            const hidden2 = document.querySelectorAll('.hidden2');

            gambarItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (selectedCategory === 'all' || category === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            if (selectedCategory === 'froot-loops') {
                hidden.forEach(element => {
                    element.classList.add('hidden-atas-open');
                });
                hidden2.forEach(element => {
                    element.classList.add('hidden-bawah-close');
                });
            } else {
                hidden.forEach(element => {
                    element.classList.remove('hidden-atas-open');
                });
                hidden2.forEach(element => {
                    element.classList.remove('hidden-bawah-close');
                });
            }
        })
    })
})


const dropdownsAdults = document.querySelectorAll('#adults .dropdown');
dropdownsAdults.forEach(dropdown => {
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')

            options.forEach(option => {
                option.classList.remove('active')
            })
            option.classList.add('active')

            const selectedCategory = option.classList[0];
            const gambarItems = document.querySelectorAll('.gambar-adults .products');
            const hidden = document.querySelectorAll('.hidden');
            const hidden2 = document.querySelectorAll('.hidden2');

            gambarItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (selectedCategory === 'all' || category === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            if (selectedCategory === 'raisin-bran') {
                hidden.forEach(element => {
                    element.classList.add('hidden-atas-open');
                });
                hidden2.forEach(element => {
                    element.classList.add('hidden-bawah-close');
                });
            } else {
                hidden.forEach(element => {
                    element.classList.remove('hidden-atas-open');
                });
                hidden2.forEach(element => {
                    element.classList.remove('hidden-bawah-close');
                });
            }
        })
    })
})


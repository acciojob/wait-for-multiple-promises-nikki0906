//your JS code here. If required.
function createRandomPromise(id) {
            return new Promise((resolve) => {
                const time = Math.random() * 2 + 1;
                setTimeout(() => {
                    resolve({ id: id, time: time });
                }, time * 1000);
            });
        }

        const promises = [
            createRandomPromise(1),
            createRandomPromise(2),
            createRandomPromise(3)
        ];

        const startTime = Date.now();

        Promise.all(promises).then(results => {
            const totalTime = (Date.now() - startTime) / 1000;
            const tableBody = document.getElementById('promiseTable');
            tableBody.innerHTML = '';

            results.forEach(result => {
                const row = document.createElement('tr');
                const cell1 = document.createElement('td');
                cell1.innerText = `Promise ${result.id}`;
                const cell2 = document.createElement('td');
                cell2.innerText = result.time.toFixed(3);

                row.appendChild(cell1);
                row.appendChild(cell2);
                tableBody.appendChild(row);
            });

            const totalRow = document.createElement('tr');
            const totalCell1 = document.createElement('td');
            totalCell1.innerText = 'Total';
            const totalCell2 = document.createElement('td');
            totalCell2.innerText = totalTime.toFixed(3);

            totalRow.appendChild(totalCell1);
            totalRow.appendChild(totalCell2);
            tableBody.appendChild(totalRow);
        });

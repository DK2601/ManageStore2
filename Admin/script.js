

function createTickCell(MaCH) {
    const cell = document.createElement("td");
    const tick = document.createElement("input");
    tick.type = "checkbox";
    tick.dataset.MaCH = MaCH;
    cell.appendChild(tick);
    return cell;
}

function showNotification(message) {
    Toastify({
      text: "Hoàn thành!",
      duration: 3000, // Thời gian hiển thị (3 giây trong ví dụ này)
      gravity: "bottom", // Vị trí hiển thị
      position: "right", // Căn chỉnh vị trí
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Màu nền
    }).showToast();
  }
  
/* GET ALL STORE */
document.getElementById("getBtn").addEventListener("click", function() {
    loadData();
    console.log("Thành công!");
    showNotification();
});

function loadData() {
    fetch('http://localhost:8090/api/store')
    .then(response => response.json())
    .then(objectData => {
            objectData[0].sort((a, b) => a.MaCH - b.MaCH); // Sắp xếp dữ liệu theo MaCH từ thấp đến cao

            let tableData = "";
            objectData[0].forEach(values => {
                const row = document.createElement("tr");

                const idCell = document.createElement("td");
                idCell.innerText = values.MaCH;
                row.appendChild(idCell);

                const nameCell = document.createElement("td");
                nameCell.innerText = values.TenCH;
                row.appendChild(nameCell);

                const totalEmployeesCell = document.createElement("td");
                totalEmployeesCell.innerText = values.TongNV;
                row.appendChild(totalEmployeesCell);

                const storeTypeCell = document.createElement("td");
                storeTypeCell.innerText = values.LoaiCH;
                row.appendChild(storeTypeCell);

                const houseNumberCell = document.createElement("td");
                houseNumberCell.innerText = values.SoNha;
                row.appendChild(houseNumberCell);
                
                const streetCell = document.createElement("td");
                streetCell.innerText = values.Duong;
                row.appendChild(streetCell);

                const districtCell = document.createElement("td");
                districtCell.innerText = values.Quan;
                row.appendChild(districtCell);
                
                const cityCell = document.createElement("td");
                cityCell.innerText = values.ThanhPho;
                row.appendChild(cityCell);

                const tickCell = createTickCell();
                row.appendChild(tickCell);
                
                tableData += row.outerHTML;
            });
            document.getElementById("tableBody").innerHTML = tableData;
        })
        .catch(error => {
            console.error(error);
        });
}

/* GET STORE BY ID */ 
document.getElementById("searchBtn").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput) {
        fetch(`http://localhost:8090/api/store/${searchInput}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                  } else {
                    throw new Error('Lỗi khi tìm kiếm cửa hàng');
                  }
            })
            .then(objectData => {
                let tableData = "";
                objectData[0].forEach(values => {
                    const row = document.createElement("tr");
    
                    const idCell = document.createElement("td");
                    idCell.innerText = values.MaCH;
                    row.appendChild(idCell);
    
                    const nameCell = document.createElement("td");
                    nameCell.innerText = values.TenCH;
                    row.appendChild(nameCell);
    
                    const totalEmployeesCell = document.createElement("td");
                    totalEmployeesCell.innerText = values.TongNV;
                    row.appendChild(totalEmployeesCell);
    
                    const storeTypeCell = document.createElement("td");
                    storeTypeCell.innerText = values.LoaiCH;
                    row.appendChild(storeTypeCell);
                    
                    const houseNumberCell = document.createElement("td");
                    houseNumberCell.innerText = values.SoNha;
                    row.appendChild(houseNumberCell);

                    const streetCell = document.createElement("td");
                    streetCell.innerText = values.Duong;
                    row.appendChild(streetCell);
                    
                    const districtCell = document.createElement("td");
                    districtCell.innerText = values.Quan;
                    row.appendChild(districtCell);
                    
                    const cityCell = document.createElement("td");
                    cityCell.innerText = values.ThanhPho;
                    row.appendChild(cityCell);

                    const tickCell = createTickCell();
                    row.appendChild(tickCell);
    
                    tableData += row.outerHTML;
                });
                document.getElementById("tableBody").innerHTML = tableData;
                
                // console.log('Dữ liệu cửa hàng tìm được:', objectData);
                if (objectData.length === 1 && objectData[0].length === 0) {
                    alert("Không có cửa hàng nào!");
                }
                // Hiển thị thông tin cửa hàng tìm được trong giao diện
                // Ví dụ: document.getElementById("storeInfo").textContent = data.TenCH;
                showNotification();
            })
            .catch(error => {
                console.error('Lỗi khi tìm kiếm cửa hàng:', error);
            });
    }
    else if (searchInput !== null) {
        fetch('http://localhost:8090/api/store')
            .then(response => response.json())
            .then(objectData => {
                let tableData = "";
                objectData[0].forEach(values => {
                    const row = document.createElement("tr");
    
                    const idCell = document.createElement("td");
                    idCell.innerText = values.MaCH;
                    row.appendChild(idCell);
    
                    const nameCell = document.createElement("td");
                    nameCell.innerText = values.TenCH;
                    row.appendChild(nameCell);
    
                    const totalEmployeesCell = document.createElement("td");
                    totalEmployeesCell.innerText = values.TongNV;
                    row.appendChild(totalEmployeesCell);
    
                    const storeTypeCell = document.createElement("td");
                    storeTypeCell.innerText = values.LoaiCH;
                    row.appendChild(storeTypeCell);
                    
                    const houseNumberCell = document.createElement("td");
                    houseNumberCell.innerText = values.SoNha;
                    row.appendChild(houseNumberCell);

                    const streetCell = document.createElement("td");
                    streetCell.innerText = values.Duong;
                    row.appendChild(streetCell);
                    
                    const districtCell = document.createElement("td");
                    districtCell.innerText = values.Quan;
                    row.appendChild(districtCell);
                    
                    const cityCell = document.createElement("td");
                    cityCell.innerText = values.ThanhPho;
                    row.appendChild(cityCell);

                    const tickCell = createTickCell();
                    row.appendChild(tickCell);
    
                    tableData += row.outerHTML;
                });
                document.getElementById("tableBody").innerHTML = tableData;
                showNotification();
                console.log('Dữ liệu cửa hàng tìm được:', objectData);

            })
            .catch(error => {
                console.error('Lỗi khi tìm kiếm cửa hàng:', error);
            });
    };
    
});

/* POST NEW STORE */
document.getElementById("addBtn").addEventListener("click", function() {
    const tableBody = document.getElementById("tableBody");

    const newrow = document.createElement("tr");

    const idCell = createInputCell(null);
    newrow.appendChild(idCell);

    const nameCell = createInputCell();
    newrow.appendChild(nameCell);

    const totalEmployeesCell = createInputCell();
    newrow.appendChild(totalEmployeesCell);

    const storeTypeCell = createInputCell();
    newrow.appendChild(storeTypeCell);
    
    const houseNumberCell = createInputCell();
    newrow.appendChild(houseNumberCell);
    
    const streetCell = createInputCell();
    newrow.appendChild(streetCell);
    
    const districtCell = createInputCell();
    newrow.appendChild(districtCell);
    
    const cityCell = createInputCell();
    newrow.appendChild(cityCell);

    tableBody.appendChild(newrow);
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
          // Xóa toàn bộ các ô input và các ô, hàng mới được tạo
          const tableBody = document.getElementById("tableBody");
          const newrow = tableBody.lastElementChild;
    
    
            tableBody.removeChild(newrow);
        
        }
      });
});

// SAVE NEW STORE Function
function saveStore() {
    const tableBody = document.getElementById("tableBody");
    const rows = tableBody.getElementsByTagName("tr");

    if (rows.length === 0) {
        console.log("Không có cửa hàng mới để lưu.");
        return;
    }

    const newStore = {};

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");

        newStore.TenCH = cells[1].querySelector("input").value;
        newStore.TongNV = cells[2].querySelector("input").value;
        newStore.LoaiCH = cells[3].querySelector("input").value;
        newStore.SoNha = cells[4].querySelector("input").value;
        newStore.Duong = cells[5].querySelector("input").value;
        newStore.Quan = cells[6].querySelector("input").value;
        newStore.ThanhPho = cells[7].querySelector("input").value;
    }

    // Gọi chức năng lưu thông tin cửa hàng mới
    saveStoreData(newStore);
}

// Save button event listener
document.getElementById("saveBtn").addEventListener("click", saveStore);

// Hàm gọi API hoặc xử lý lưu dữ liệu cửa hàng mới
function saveStoreData(newStore) {
    // Thực hiện gọi API hoặc xử lý lưu dữ liệu cửa hàng mới tại đây
    fetch('http://localhost:8090/api/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStore)
    })
    .then(response => {
        if (response.ok) {
            console.log('Cửa hàng mới đã được thêm thành công!');
            // Thực hiện các thao tác cần thiết sau khi thêm cửa hàng mới thành công
            // Ví dụ: clear form, load lại dữ liệu, hiển thị thông báo thành công, v.v.
        } else {
            throw new Error('Lỗi khi thêm cửa hàng mới');
        }
    })
    .catch(error => {
        console.error('Lỗi khi thêm cửa hàng mới:', error);
    });

    // Xử lý sau khi lưu thành công
    handleSaveSuccess();
}

// Hàm xử lý sau khi lưu thành công
function handleSaveSuccess() {
    alert('Cửa hàng mới đã được thêm thành công!');
    showNotification();
    // Thực hiện các thao tác cần thiết sau khi lưu thành công
    // Ví dụ: clear form, load lại dữ liệu, hiển thị thông báo thành công, v.v.
    return loadData();
}

// Sự kiện khi tick checkbox
document.getElementById("tableBody").addEventListener("change", function(event) {
    const target = event.target;
    if (target.tagName === "INPUT" && target.type === "checkbox") {
        const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const editButton = document.getElementById("editBtn");
        const deleteButton = document.getElementById("delBtn");
        if (checkedCheckboxes.length === 1) {
            editButton.disabled = false;
            deleteButton.disabled = false;
        } else {
            editButton.disabled = true;
            deleteButton.disabled = true;
        }
    }
});

document.getElementById('editBtn').addEventListener("click", function() {
     editStores();
});

// Chức năng tạo ô input với giá trị ban đầu
function createInputCell(value) {
    const cell = document.createElement("td");
    const input = document.createElement("input");
    input.value = value; // Thiết lập giá trị ban đầu cho ô input
    cell.appendChild(input);
    return cell;
}

// Chức năng tạo ô text hiển thị giá trị
function createTextCell(value) {
    const cell = document.createElement("td");
    cell.innerText = value;
    return cell;
}

// Chức năng chuyển ô text thành ô input
function convertTextToInputCell(cell, value) {
    const input = document.createElement("input");
    input.value = value;
    cell.innerHTML = '';
    cell.appendChild(input);
}

// Chức năng chuyển ô input thành ô text
function convertInputToTextCell(cell) {
    const input = cell.querySelector("input");
    if (input) {
        const value = input.value;
        cell.removeChild(input);
        cell.innerText = value;
    }
}


// Chức năng chỉnh sửa
function editStores() {
    const tableBody = document.getElementById("tableBody");
    const rows = tableBody.getElementsByTagName("tr");
    const checkedRows = [];

    for (let i = 0; i < rows.length; i++) {
        const tickCell = rows[i].querySelector("td input[type='checkbox']");

        if (tickCell.checked) {
            checkedRows.push(rows[i]);
        }
    }

    if (checkedRows.length === 0) {
        alert("Vui lòng chọn hàng cần chỉnh sửa.");
        return;
    }

    checkedRows.forEach(row => {
        const cells = row.getElementsByTagName("td");

        for (let i = 0; i < cells.length - 1; i++) {
            const cell = cells[i];
            const value = cell.innerText;

            convertTextToInputCell(cell, value);
        }
    });

    // Lắng nghe sự kiện "keydown" trên toàn bộ trang
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            checkedRows.forEach(row => {
                const cells = row.getElementsByTagName("td");

                for (let i = 0; i < cells.length - 1; i++) {
                    const cell = cells[i];
                    convertInputToTextCell(cell);
                }
            });
        }
    });
}



  

document.getElementById('saveChangesBtn').addEventListener("click", function(){
    saveChanges();
});

// Chức năng lưu thay đổi
function saveChanges() {
    const tableBody = document.getElementById("tableBody");
    const rows = tableBody.getElementsByTagName("tr");

    if (rows.length === 0) {
        console.log("Không có thay đổi để lưu.");
        return;
    }

    const updatedStores = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const updatedStore = {};

        for (let j = 0; j < cells.length - 1; j++) {
            const cell = cells[j];
            const inputElement = cell.querySelector("input");

            if (inputElement !== null) {
                const value = inputElement.value;
                convertInputToTextCell(cell);
                const fieldName = cell.getAttribute("id");
                updatedStore[fieldName] = value;
            } else {
                // Xử lý trường hợp không tìm thấy phần tử <input>
                console.log("Không tìm thấy phần tử <input> trong ô.");
            }
        }

        if (Object.keys(updatedStore).length > 0) {
            updatedStores.push(updatedStore);
        }
        
    }
    var MaCH = rows.cells[1].getElementsByTagName("input")[0].value;
    // Gọi chức năng lưu thay đổi
    if (updatedStores.length > 0) {
        saveChangesData(MaCH);
    } else {
        console.log("Không có thay đổi để lưu.");
    }
}

// Hàm gọi API hoặc xử lý lưu thay đổi
function saveChangesData(updatedStores) {
    // Gửi yêu cầu lưu thay đổi đến máy chủ hoặc API
    var MaCH = updatedStores.MaCH
    
    fetch(`http://localhost:8090/api/store/${MaCH}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStores),
    })
    .then(response => {
        if (response.ok) {
            console.log('Thay đổi đã được lưu.');
            // Thực hiện các hành động bổ sung (nếu cần) sau khi lưu thành công
        } else {
            console.log('Lưu thay đổi thất bại.');
        }
    })
    .catch(error => {
        console.log('Lỗi khi gửi yêu cầu lưu thay đổi:', error);
    });
}

/* DELETE STORE BY ID */ 
document.getElementById("delBtn").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xoá các cửa hàng đã chọn?");
        if(confirmDelete) {
            fetch(`http://localhost:8090/api/store/${searchInput}`,{method: 'DELETE'} )
            .then(response => {
                if (response.ok) {
                    console.log(`Xoá cửa hàng có id ${searchInput} thành công.`);
                } else {
                    throw new Error(`Lỗi khi xoá cửa hàng có id ${searchInput}`);
                }
            });
        }
    } else {
        alert('Không có cửa hàng được chọn để xoá')
    }

});
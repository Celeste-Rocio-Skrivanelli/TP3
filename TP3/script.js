JavaScript
// Referencias a los elementos del DOM
const fileInput = document.getElementById('fileInput');
const btnUpload = document.getElementById('btnUpload');
const detailsCard = document.getElementById('detailsCard');
const fileName = document.getElementById('fileName');
const fileType = document.getElementById('fileType');
const fileSize = document.getElementById('fileSize');
const imagePreview = document.getElementById('imagePreview');

// 1. Simular clic en el input file al presionar el botón
btnUpload.addEventListener('click', () => {
  fileInput.click();
});

// 2. Manejar el evento change del input file
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (!file) return;

  // Extraer las propiedades del objeto File
  fileName.textContent = file.name;
  fileType.textContent = file.type || 'Desconocido';
  fileSize.textContent = file.size;

  // Leer el archivo como URL de datos para la previsualización
  const reader = new FileReader();

  reader.onload = (e) => {
    imagePreview.src = e.target.result;
    detailsCard.style.display = 'block';
  };

  reader.readAsDataURL(file);
});
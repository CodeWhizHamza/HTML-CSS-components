// * Success modal on Subscribe
// const form = document.querySelector('.form')

// form.addEventListener('submit', function (e) {
//   e.preventDefault()

//   // Modal Code
//   const options = {
//     title: 'Subscribed Successfully',
//     text: "Now you're a permanent member for our weekly newsletter",
//     icon: 'success',
//     confirmButtonText: 'Close',
//     showCloseButton: true,
//   }
//   Swal.fire(options)
// })

// * Delete modal
// const btn = document.querySelector('.btn-delete')

// btn.addEventListener('click', e => {
//   e.preventDefault()

//   Swal.fire({
//     title: 'Are you sure?',
//     icon: 'question',
//     showCancelButton: true,
//     showCloseButton: true,
//     confirmButtonText: 'Yes!',
//     cancelButtonText: 'No',
//   }).then(res => {
//     if (res.isConfirmed) {
//       Swal.fire({
//         title: 'Deleted Successfully',
//         icon: 'success',
//         confirmButtonText: 'Close',
//         showCloseButton: true,
//       })
//     }
//   })
// })

// * Toast notification
// const btn = document.querySelector('.btn-delete')

// btn.addEventListener('click', e => {
//   e.preventDefault()

//   Swal.fire({
//     title: 'Deleted successfully',
//     icon: 'warning',
//     toast: true,
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     position: 'top-right',
//   })
// })

// Themes
// const btn = document.querySelector('.btn-delete')

// btn.addEventListener('click', e => {
//   e.preventDefault()

//   Swal.fire({
//     title: 'Are you sure?',
//     icon: 'question',
//     showCancelButton: true,
//     showCloseButton: true,
//     confirmButtonText: 'Yes!',
//     cancelButtonText: 'No',
//   }).then(res => {
//     if (res.isConfirmed) {
//       Swal.fire({
//         title: 'Deleted Successfully',
//         icon: 'success',
//         confirmButtonText: 'Close',
//         showCloseButton: true,
//       })
//     }
//   })
// })

const btn = document.querySelector('.btn-delete')
btn.addEventListener('click', () => {
  if (confirm('Are you sure?')) alert('Ok, deleted')
})

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-name').value.trim();
  const content = document.querySelector('#blog-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

const updateButtonHandler = async (event) => {
  event.preventDefault()
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/blogs/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace(`/blogs/${id}`);
    } else {
      alert('Failed to update blog');
      console.log(error);
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.btn-danger')
  .addEventListener('click', delButtonHandler);

  document
  .querySelector('.btn-info')
  .addEventListener('click', updateButtonHandler);

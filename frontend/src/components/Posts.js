import React from 'react'

const Posts = ({ posts, user }) => {
  return(
    <>
      <div className="lg:pl-10">
        <h1 className="text-xl mb-4">
          Posts from <span className="font-bold">{user.name}</span>
        </h1>

        {posts.map(post => (
          <div key={post.id}>
            <div className="p-6 shadow mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600">
                {post.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Posts
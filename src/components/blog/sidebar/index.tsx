import React from 'react';

const SidebarWidgets: React.FC = () => {
  // Dummy data for recent posts and filter menu
  const recentPosts = [
    { id: 1, date: 'June 22, 2020', title: 'Lorem ipsum dolor sit cing elit, sed do.', img: '/blogsidebar/unsplash_J9lD6FS6_cs.png' },
    { id: 2, date: 'June 22, 2020', title: 'Lorem ipsum dolor sit cing elit, sed do.', img: '/blogsidebar/unsplash_LgTyii0GDKQ.png' },
    { id: 3, date: 'June 22, 2020', title: 'Lorem ipsum dolor sit cing elit, sed do.', img: '/blogsidebar/unsplash_mmnKI8kMxpc.png' },
    { id: 4, date: 'June 22, 2020', title: 'Lorem ipsum dolor sit cing elit, sed do.', img: '/blogsidebar/unsplash_cLpdEA23Z44 (1).png' },
  ];

  const filterMenu = [
    { id: 1, name: 'Chicken Fry', count: 26, img: '/blogsidebar/unsplash_WHtVB-RiW2I.png' },
    { id: 2, name: 'Burger Food', count: 46, img: '/blogsidebar/unsplash_W10_NCsLVyc.png' },
    { id: 3, name: 'Pizza', count: 16, img: '/blogsidebar/unsplash_On2VseHUDXw.png' },
    { id: 4, name: 'Fresh Fruits', count: 36, img: '/blogsidebar/unsplash_sc5sTPMrVfk.png' },
    { id: 5, name: 'Vegetables', count: 16, img: '/blogsidebar/unsplash_mAQZ3X_8_l0 (1).png' },
  ];

  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Post</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-center space-x-4">
              <img
                src={post.img}
                alt={post.title}
                className="w-16 h-16 object-cover rounded-md border border-gray-200"
              />
              <div>
                <p className="text-xs text-gray-500">{post.date}</p>
                <p className="text-sm text-gray-800">{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter By Menu */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Filter By Menu</h3>
        <div className="space-y-4">
          {filterMenu.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                />
                <p className="text-sm text-gray-800">{item.name}</p>
              </div>
              <p className="text-sm text-gray-600">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarWidgets;

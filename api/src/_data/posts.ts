import { IPost } from '../models/Post'

const posts: IPost[] = [
    {
        user: null,
        title: "My first Post",
        permalink: "my-first-post",
        category: "test",
        description: "This is my first test post",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lobortis imperdiet. Duis finibus aliquet scelerisque. Pellentesque gravida porta nulla pellentesque cursus. Sed quis arcu sed erat condimentum egestas vel ac felis. Cras odio diam, euismod vitae posuere in, fermentum ac libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla cursus ligula tincidunt est venenatis varius. Sed at sapien magna. Nunc ipsum justo, tincidunt at mollis sit amet, ultricies a eros. Cras ac diam quis purus maximus ultricies. Donec ut purus id tortor luctus pulvinar non vel nunc. Maecenas velit velit, viverra ac dolor ut, commodo aliquet magna. Mauris a odio enim. Nulla ullamcorper, libero non faucibus viverra, odio turpis efficitur mauris, quis commodo nulla felis quis lorem.",
        type: "post",
        status: "published",
        access: "public",
        image: ""
    },
    {
        user: null,
        title: "My secont Post",
        permalink: "my-second-post",
        category: "test",
        description: "This is my second test post",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lobortis imperdiet. Duis finibus aliquet scelerisque. Pellentesque gravida porta nulla pellentesque cursus. Sed quis arcu sed erat condimentum egestas vel ac felis. Cras odio diam, euismod vitae posuere in, fermentum ac libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla cursus ligula tincidunt est venenatis varius. Sed at sapien magna. Nunc ipsum justo, tincidunt at mollis sit amet, ultricies a eros. Cras ac diam quis purus maximus ultricies. Donec ut purus id tortor luctus pulvinar non vel nunc. Maecenas velit velit, viverra ac dolor ut, commodo aliquet magna. Mauris a odio enim. Nulla ullamcorper, libero non faucibus viverra, odio turpis efficitur mauris, quis commodo nulla felis quis lorem.",
        type: "post",
        status: "published",
        access: "public",
        image: ""
    },
    {
        user: null,
        title: "Test Page",
        permalink: "test-page",
        description: "This is my first test page",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lobortis imperdiet. Duis finibus aliquet scelerisque. Pellentesque gravida porta nulla pellentesque cursus. Sed quis arcu sed erat condimentum egestas vel ac felis. Cras odio diam, euismod vitae posuere in, fermentum ac libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla cursus ligula tincidunt est venenatis varius. Sed at sapien magna. Nunc ipsum justo, tincidunt at mollis sit amet, ultricies a eros. Cras ac diam quis purus maximus ultricies. Donec ut purus id tortor luctus pulvinar non vel nunc. Maecenas velit velit, viverra ac dolor ut, commodo aliquet magna. Mauris a odio enim. Nulla ullamcorper, libero non faucibus viverra, odio turpis efficitur mauris, quis commodo nulla felis quis lorem.",
        type: "page",
        status: "published",
        access: "public"
    },
    {
        user: null,
        title: "Test Page 2",
        permalink: "test-page-2",
        description: "This is my second test page",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lobortis imperdiet. Duis finibus aliquet scelerisque. Pellentesque gravida porta nulla pellentesque cursus. Sed quis arcu sed erat condimentum egestas vel ac felis. Cras odio diam, euismod vitae posuere in, fermentum ac libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla cursus ligula tincidunt est venenatis varius. Sed at sapien magna. Nunc ipsum justo, tincidunt at mollis sit amet, ultricies a eros. Cras ac diam quis purus maximus ultricies. Donec ut purus id tortor luctus pulvinar non vel nunc. Maecenas velit velit, viverra ac dolor ut, commodo aliquet magna. Mauris a odio enim. Nulla ullamcorper, libero non faucibus viverra, odio turpis efficitur mauris, quis commodo nulla felis quis lorem.",
        type: "page",
        status: "published",
        access: "public"
    }
]

export default posts
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/CardsBlogs.css";

function CardsBlogs() {
  const posts = [
    {
      id: 1,
      title: "Tips chọn thảm lông trải sàn theo màu sofa cực đơn giản",
      slug: "tips-chon-tham-long-trai-san-theo-mau-sofa-cuc-don-gian",
      sections: [
        {
          type: "text",
          content:
            "Bạn có thể dễ dàng phối màu thảm lông với sofa để tạo không gian hài hòa.",
        },
        { type: "image", content: "https://via.placeholder.com/600x400" },
        {
          type: "text",
          content: "Chọn màu sáng giúp tạo cảm giác không gian rộng hơn.",
        },
      ],
    },
    {
      id: 2,
      title: "Hướng dẫn tự làm sạch thảm trải sàn tại nhà",
      slug: "huong-dan-tu-lam-sach-tham-trai-san-tai-nha",
      sections: [
        {
          type: "text",
          content: "Làm sạch thảm tại nhà dễ dàng hơn bạn nghĩ!",
        },
        { type: "image", content: "https://via.placeholder.com/600x400" },
      ],
    },
    {
      id: 3,
      title: "Cách chọn thảm trải sàn bền đẹp cho phòng khách",
      slug: "cach-chon-tham-trai-san-ben-dep-cho-phong-khach",
      sections: [
        {
          type: "text",
          content:
            "Thảm trải sàn cho phòng khách cần có độ bền cao và dễ vệ sinh.",
        },
        { type: "image", content: "https://via.placeholder.com/600x400" },
      ],
    },
    {
      id: 4,
      title: "Thảm lông dài hay lông ngắn: Đâu là lựa chọn phù hợp?",
      slug: "tham-long-dai-hay-long-ngan-dau-la-lua-chon-phu-hop",
      sections: [
        {
          type: "text",
          content:
            "Tùy thuộc vào mục đích sử dụng, bạn nên cân nhắc loại thảm phù hợp.",
        },
        { type: "image", content: "https://via.placeholder.com/600x400" },
      ],
    },
    {
      id: 5,
      title: "Những loại thảm không nên bỏ qua khi trang trí phòng ngủ",
      slug: "nhung-loai-tham-khong-nen-bo-qua-khi-trang-tri-phong-ngu",
      sections: [
        {
          type: "text",
          content: "Thảm phòng ngủ giúp không gian thêm ấm áp và phong cách.",
        },
        { type: "image", content: "https://via.placeholder.com/600x400" },
      ],
    },
  ];
  return (
    <div className="products">
      {posts.map((post) => (
        <Link to={`/blogs/${post.slug}`} className="text-pr mg-blogs">
          <Card sx={{ maxWidth: 380, height: 540 }} className="box-product">
            <CardMedia
              sx={{ height: 300 }}
              image={post.sections[1].content}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="h4"
                className="blogs-title-cate"
              >
                {post.title}
              </Typography>
              <Typography gutterBottom component="h3" className="blogs-title">
                {post.title}
              </Typography>
              <Typography
                sx={{ color: "text.dark" }}
                className="blogs-description"
              >
                {post.sections[0].content}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default CardsBlogs;

import React from "react";
import "../assets/css/BlogsContent.css";
import { posts } from "./fakeData";
import { useParams } from "react-router-dom";

function BlogsContent() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Bài viết không tồn tại!</div>;
  return (
    <div className="blogs-content container">
      <div className="blogs-content-left">
        <h1 className="blogs-content-title">{post.title}</h1>
        {post.sections.map((section, index) => (
          <div key={index}>
            {section.type === "text" ? (
              <p className="content-text">{section.content}</p>
            ) : (
              <img
                src={section.content}
                alt={`Section ${index}`}
                style={{ width: "100%", margin: "20px 0" }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="blogs-content-right">
        <h2 className="content-right-title">Bài viết liên quan</h2>
        <div className="relates-posts">
          <div className="relates-post">
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m35rbiw4tnrvec.webp"
              alt="hi"
              style={{ width: "140px", maxHeight: "100px" }}
            />
            <h5 className="relates-post-title">
              Những điều cần biết khi mua thảm trải sàn
            </h5>
          </div>
          <div className="relates-post">
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m35rbiw4tnrvec.webp"
              alt="hi"
              style={{ width: "140px", maxHeight: "100px" }}
            />
            <h5 className="relates-post-title">
              Những điều cần biết khi mua thảm trải sàn
            </h5>
          </div>
          <div className="relates-post">
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m35rbiw4tnrvec.webp"
              alt="hi"
              style={{ width: "140px", maxHeight: "100px" }}
            />
            <h5 className="relates-post-title">
              Những điều cần biết khi mua thảm trải sàn
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsContent;

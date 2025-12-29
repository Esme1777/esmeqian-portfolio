// src/components/Resume/ResumeNew.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

/**
 * 默认使用原生内嵌 PDF（<object>/<iframe>），
 * 如果仍然遇到自动下载，可把 .env 里 REACT_APP_USE_GDOCS=true 然后重启 dev/server，
 * 让它使用 Google Docs 预览（仅生产公网 HTTPS 可用）。
 */
const USE_GDOCS = String(process.env.REACT_APP_USE_GDOCS || "false") === "true";

function ResumeNew() {
  const pdfPath = "/esmeqian-resume.pdf"; // 确保放在 public 根目录
  const fileUrl = typeof window !== "undefined" ? `${window.location.origin}${pdfPath}` : pdfPath;
  const viewerUrl = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(fileUrl)}`;

  return (
    <Container fluid className="resume-section" style={{ paddingTop: "100px" }}>
      <Container>
        {/* 按钮区 */}
        <Row className="justify-content-center" style={{ marginBottom: 16 }}>
          <Col md="auto">
            <Button as="a" href={pdfPath} target="_blank" rel="noreferrer" className="btn-primary">
              View in new tab
            </Button>
          </Col>
          <Col md="auto">
            <Button as="a" href={pdfPath} download className="btn-primary">
              Download PDF
            </Button>
          </Col>
        </Row>

        {/* 预览区 */}
        <Row className="justify-content-center">
          <Col md={10}>
            <div
              style={{
                position: "relative",
                paddingBottom: "141%", // A4 纵向大约 1:1.41
                height: 0,
              }}
            >
              {/* 优先使用原生内嵌。某些浏览器会自动下载，可再改用 GDocs */}
              {!USE_GDOCS ? (
                <object
                  data={pdfPath}
                  type="application/pdf"
                  aria-label="Resume PDF"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "white",
                    borderRadius: 12,
                    boxShadow: "0 8px 22px rgba(0,0,0,.25)",
                  }}
                >
                  {/* object 失败时的兜底 */}
                  <iframe
                    title="Resume"
                    src={pdfPath}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      background: "white",
                      borderRadius: 12,
                      boxShadow: "0 8px 22px rgba(0,0,0,.25)",
                    }}
                  />
                </object>
              ) : (
                <iframe
                  title="Resume via Google Viewer"
                  src={viewerUrl}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "white",
                    borderRadius: 12,
                    boxShadow: "0 8px 22px rgba(0,0,0,.25)",
                  }}
                  allow="clipboard-write"
                />
              )}
            </div>

            <p style={{ textAlign: "center", marginTop: 12, opacity: 0.8 }}>
              If the preview doesn’t load,{" "}
              <a href={pdfPath} target="_blank" rel="noreferrer">
                open the PDF
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;


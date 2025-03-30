function generateImage() {
    let prompt = document.getElementById("prompt").value;
    let type = document.getElementById("type").value;
    let imageUrl = type === "banner" 
        ? `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1920&height=1080&seed=36&enhance=true&nologo=true&model=flux-pro`
        : `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=500&height=500&seed=36&enhance=true&nologo=true&model=flux-pro`;

    let imageBox = document.getElementById("image-box");
    imageBox.innerHTML = `<img src="${imageUrl}" width="100%" alt="Generated Image">`;

    document.getElementById("download").style.display = "inline-block";
    document.getElementById("share").style.display = "inline-block";

    sessionStorage.setItem("lastImage", imageUrl);
}

function downloadImage() {
    let imageUrl = sessionStorage.getItem("lastImage");
    let link = document.createElement("a");
    link.href = imageUrl;
    link.download = "generated-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function shareImage() {
    let imageUrl = sessionStorage.getItem("lastImage");
    let shareUrl = `${window.location.origin}/prompt/${encodeURIComponent(imageUrl)}`;
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied: " + shareUrl);
}


document.addEventListener("DOMContentLoaded",function(){
  //Resume Download Button
  document.getElementById("downloadResume").addEventListener("click",function(){
    const resumeURL= "TDK-Bros-cv.pdf";
    const link = document.createElement("a");
    link.href =resumeURL;
    link.download = "Sudan's_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  document.getElementById("visitGithub").addEventListener("click",function(){
    window.open("https://github.com/tdksudan","_blank");
  });
});
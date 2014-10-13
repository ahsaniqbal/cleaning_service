package com.google.quality.refine.webservices;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

//@WebServlet("/QualityReport")
@MultipartConfig(fileSizeThreshold = 1024*1024*2,
			maxFileSize = 1024*1024*10,
			maxRequestSize = 1024*1024*50)
public class QualityReportServlet extends HttpServlet  
{
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException
	{
		response.setContentType("text/html;charset=UTF-8");

	    // Create path components to save the file
	    final Part filePart = request.getPart("fileValue");
	    
	    InputStream filecontent = filePart.getInputStream();
	    
	    saveFile(filecontent);
	    
		String[] vals = request.getParameterValues("accuracySubMet");
		
		String result = new String();
		for(int i=0; i<vals.length; i++)
		{
			result += vals[i];
		}
		
		PrintWriter writer = response.getWriter();
	
		writer.print(result);
	}
	
	private void createFilesDirIfNot(String path)
	{
		File file = new File(path);
		if(!file.exists())
		{
			file.mkdir();
		}
	}
	private String getUniqueFileName()
	{
		return UUID.randomUUID().toString();
	}
	private String saveFile(InputStream inputStream) throws IOException
	{
		String uniqueFileName = getUniqueFileName();
		createFilesDirIfNot("D:/files/");
        
    	String uploadedFilePath = "D:/files/" + uniqueFileName;
	
    	OutputStream out = null;
        int read = 0;
        byte[] bytes = new byte[1024];

        out = new FileOutputStream(new File(uploadedFilePath));
        while ((read = inputStream.read(bytes)) != -1) {
            out.write(bytes, 0, read);
        }
        out.flush();
        out.close();
        
        return uniqueFileName;
	}
}

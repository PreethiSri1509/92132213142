const LOG_API="http://20.244.56.144.evaluation-service/logs";
export async function log(level,logPackage, message){
    const payload={
        stack:"frontend",
        level, package:logPackage, message
    };
    try{
        const response=await fetch(LOG_API,{
            method:"POST", headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${ProcessingInstruction.env.REACT_APP_LOG_TOKEN}`,
            }, body:JSON.stringify(payload),
        });
    if(!response.ok){
        console.warn("Logging failed",await response.text());
    }
    }catch(err){
        console.error("Error during logging",err);
    }
}
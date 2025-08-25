interface TikTokIconProps {
  className?: string;
}

const TikTokIcon = ({ className = "w-5 h-5" }: TikTokIconProps) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.294-1.98-1.294-3.302V.6h-3.547v14.878c0 2.4-1.947 4.347-4.347 4.347S4.207 17.878 4.207 15.478s1.947-4.347 4.347-4.347c.449 0 .883.068 1.294.194v-3.678a7.95 7.95 0 0 0-1.294-.107C3.689 7.54 0 11.229 0 15.478S3.689 23.417 8.554 23.417s8.554-3.939 8.554-8.939V9.255a9.116 9.116 0 0 0 5.34 1.717v-3.547a5.991 5.991 0 0 1-2.447-.863c-.449-.301-.849-.672-1.68-1z"/>
    </svg>
  );
};

export default TikTokIcon;
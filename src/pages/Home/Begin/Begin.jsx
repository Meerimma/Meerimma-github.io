import React from 'react';
import {Link} from "react-router-dom";
import group1 from '../../../assets/Begin/group1.png'
import group2 from '../../../assets/Begin/group2.png'
import group3 from '../../../assets/Begin/group3.png'
import group4 from '../../../assets/Begin/group4.png'



const Begin = () => {
    return (
        <section className="begin">
            <div className="container">
                <div className="begin__content">

                    <Link to="/sales"> <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="134" height="103" rx="11.5" fill="white" stroke="#F0F0F0"/>
                        <g clip-path="url(#clip0_11140_3089)">
                            <path d="M79.4316 38.7355C79.0651 33.9631 76.8431 30.9724 74.8828 28.3333C73.0677 25.8901 71.5 23.7802 71.5 20.6678C71.5 20.4178 71.36 20.1893 71.138 20.0747C70.9153 19.9595 70.6477 19.9784 70.4453 20.1255C67.5013 22.2321 65.0449 25.7827 64.1869 29.1704C63.5912 31.529 63.5124 34.1805 63.5013 35.9317C60.7826 35.351 60.1667 31.2842 60.1602 31.2399C60.1296 31.029 60.0007 30.8454 59.8132 30.7452C59.6237 30.6462 59.4011 30.6391 59.209 30.7341C59.0664 30.8031 55.7096 32.5087 55.5143 39.3188C55.5006 39.5454 55.5 39.7726 55.5 39.9998C55.5 46.6159 60.8834 51.999 67.5 51.999C67.5091 51.9996 67.5189 52.0009 67.5267 51.999C67.5293 51.999 67.5319 51.999 67.5351 51.999C74.1354 51.98 79.5 46.6042 79.5 39.9998C79.5 39.6671 79.4316 38.7355 79.4316 38.7355ZM67.5 50.6657C65.2942 50.6657 63.5 48.7544 63.5 46.405C63.5 46.3249 63.4994 46.2442 63.5052 46.1452C63.5319 45.1544 63.7201 44.478 63.9264 44.0282C64.3132 44.8589 65.0046 45.6225 66.1276 45.6225C66.4961 45.6225 66.7943 45.3243 66.7943 44.9559C66.7943 44.0067 66.8139 42.9117 67.0502 41.9235C67.2605 41.0472 67.7631 40.115 68.3998 39.3677C68.683 40.3377 69.2351 41.1227 69.7742 41.889C70.5457 42.9852 71.3432 44.1187 71.4832 46.0515C71.4916 46.166 71.5001 46.2813 71.5001 46.405C71.5 48.7544 69.7057 50.6657 67.5 50.6657Z" fill="#E23535"/>
                        </g>
                        <path d="M49.9658 78H51.627L46.9512 65.3174H45.3867L40.7109 78H42.3721L43.6465 74.3701H48.6914L49.9658 78ZM46.0986 67.3652H46.2393L48.2256 73.0254H44.1123L46.0986 67.3652ZM55.749 73.6846L59.5459 78H61.5059L56.9971 72.9902L61.3389 68.5254H59.502L55.749 72.4893H55.3359V68.5254H53.8242V78H55.3359V73.6846H55.749ZM72.7031 80.5049V76.7344H71.1914V68.5254H69.6797V76.7344H65.127V68.5254H63.6152V78H71.2793V80.5049H72.7031ZM76.2012 78L80.9209 70.9336H81.0615V78H82.5732V68.5254H81.0615L76.3418 75.5918H76.2012V68.5254H74.6895V78H76.2012ZM87.0996 78L91.8193 70.9336H91.96V78H93.4717V68.5254H91.96L87.2402 75.5918H87.0996V68.5254H85.5879V78H87.0996Z" fill="#E23535"/>
                        <defs>
                            <clipPath id="clip0_11140_3089">
                                <rect width="32" height="32" fill="white" transform="translate(51.5 20)"/>
                            </clipPath>
                        </defs>
                    </svg></Link>

                    <Link to="/pizza"> <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="134" height="103" rx="11.5" fill="white" stroke="#F0F0F0"/>
                        <g clip-path="url(#clip0_11140_3045)">
                            <path d="M77.6551 43.0051C77.7383 43.8688 77.4347 44.7163 76.8215 45.3302C76.2082 45.944 75.3629 46.2475 74.498 46.165C73.7804 46.0956 73.0949 46.4909 72.7957 47.1487C72.4359 47.9389 71.7492 48.5207 70.9117 48.7453C70.0734 48.9698 69.1886 48.8099 68.4832 48.3057C68.3632 48.22 68.2334 48.1564 68.1 48.1056V52C73.5467 51.7977 78.3039 48.8586 81.0394 44.5178L77.6736 42.5728C77.6508 42.7138 77.6409 42.8582 77.6551 43.0051Z" fill="#FF7010"/>
                            <path d="M64.8399 48.8447C64.5891 48.8447 64.3367 48.812 64.0883 48.7454C63.2508 48.5209 62.5641 47.9391 62.2043 47.1491C61.9047 46.4907 61.2184 46.0962 60.5016 46.165C59.636 46.2467 58.7914 45.9439 58.1785 45.3302C57.5653 44.7163 57.2617 43.8689 57.3449 43.005C57.3591 42.8581 57.3492 42.7138 57.3264 42.5728L53.9606 44.5179C56.6961 48.8587 61.4533 51.7977 66.9 52V48.1057C66.7666 48.1564 66.6368 48.22 66.5168 48.3057C66.0203 48.6603 65.4348 48.8447 64.8399 48.8447Z" fill="#FF7010"/>
                            <path d="M64.3988 24.4149C63.9086 24.5465 63.507 24.8868 63.2965 25.3492C62.7848 26.4739 61.6086 27.1503 60.3867 27.0308C59.8809 26.9822 59.3859 27.1599 59.0274 27.5192C58.6684 27.8783 58.4906 28.3743 58.5395 28.8799C58.5784 29.2843 58.524 29.6796 58.4036 30.0499L66.9 34.96V25.1395C66.5194 25.0588 66.1503 24.9083 65.8199 24.6724C65.407 24.3772 64.8887 24.2839 64.3988 24.4149ZM64.567 30.9151C63.6613 31.4385 62.5032 31.1279 61.9804 30.2214C61.4575 29.3149 61.7678 28.1557 62.6734 27.6323C63.5791 27.1089 64.7372 27.4195 65.2601 28.326C65.7829 29.2326 65.4726 30.3917 64.567 30.9151Z" fill="#FF7010"/>
                            <path d="M56.3617 41.3005C55.5727 40.941 54.9914 40.2539 54.7668 39.4156C54.5422 38.5771 54.7023 37.6909 55.2063 36.9843C55.6258 36.3957 55.6258 35.6047 55.2063 35.0163C54.7023 34.3095 54.5422 33.4233 54.7668 32.5848C54.9914 31.7465 55.5727 31.0594 56.3617 30.6997C56.4959 30.6385 56.6158 30.5578 56.7264 30.4676L53.358 28.521C52.1739 30.7551 51.5 33.2999 51.5 36.0002C51.5 38.7005 52.1739 41.2453 53.358 43.4794L56.7265 41.5328C56.6159 41.4425 56.4959 41.3618 56.3617 41.3005Z" fill="#FF7010"/>
                            <path d="M70.9117 23.2547C71.7492 23.4791 72.4359 24.0609 72.7957 24.8509C73.0949 25.5094 73.7804 25.9047 74.4984 25.8351C75.3613 25.752 76.2086 26.0562 76.8215 26.6698C77.4347 27.2837 77.7383 28.1312 77.6551 28.9951C77.6409 29.142 77.6508 29.2863 77.6736 29.4273L81.0394 27.4822C78.3039 23.1414 73.5467 20.2023 68.1 20V23.8944C68.2334 23.8436 68.3632 23.78 68.4832 23.6944C69.1886 23.1902 70.0734 23.0297 70.9117 23.2547Z" fill="#FF7010"/>
                            <path d="M55.9258 39.1043C56.057 39.5948 56.3973 39.9969 56.8594 40.2073C57.2287 40.3758 57.5435 40.6205 57.8037 40.91L66.3001 36L57.8036 31.0898C57.5435 31.3793 57.2286 31.624 56.8594 31.7924C56.3973 32.003 56.057 32.4051 55.9258 32.8956C55.7945 33.3861 55.8883 33.9048 56.1828 34.3183C56.9004 35.3241 56.9004 36.6758 56.1828 37.6818C55.8883 38.0951 55.7945 38.6138 55.9258 39.1043ZM59.7404 34.1046C60.7862 34.1046 61.6339 34.9532 61.6339 36C61.6339 37.0467 60.7862 37.8953 59.7404 37.8953C58.6946 37.8953 57.8469 37.0467 57.8469 36C57.8469 34.9532 58.6946 34.1046 59.7404 34.1046Z" fill="#FF7010"/>
                            <path d="M53.9606 27.4822L57.3264 29.4273C57.3492 29.2862 57.3591 29.1418 57.3449 28.9949C57.2617 28.1312 57.5653 27.2837 58.1785 26.6698C58.7918 26.056 59.6371 25.7524 60.502 25.8351C61.2172 25.9056 61.9051 25.509 62.2043 24.8513C62.5641 24.0611 63.2508 23.4793 64.0883 23.2547C64.9262 23.0301 65.811 23.1902 66.5168 23.6944C66.6368 23.78 66.7666 23.8436 66.9 23.8944V20C61.4533 20.2023 56.6961 23.1414 53.9606 27.4822Z" fill="#FF7010"/>
                            <path d="M81.642 28.521L78.2736 30.4676C78.3842 30.5579 78.5041 30.6386 78.6383 30.6998C79.4274 31.0594 80.0086 31.7465 80.2332 32.5848C80.4578 33.4233 80.2977 34.3095 79.7938 35.0161C79.3742 35.6047 79.3742 36.3957 79.7938 36.9841C80.2977 37.6909 80.4578 38.5771 80.2332 39.4156C80.0086 40.2539 79.4274 40.941 78.6383 41.3007C78.5041 41.3619 78.3842 41.4426 78.2737 41.5328L81.642 43.4794C82.8261 41.2453 83.5 38.7005 83.5 36.0002C83.5 33.2999 82.8261 30.7551 81.642 28.521Z" fill="#FF7010"/>
                            <path d="M58.5395 43.12C58.4906 43.6257 58.6684 44.1217 59.0274 44.4808C59.3859 44.84 59.8852 45.0163 60.3863 44.9692C61.6192 44.8495 62.7852 45.5267 63.2965 46.6509C63.507 47.113 63.9086 47.4536 64.3988 47.5851C64.8883 47.7165 65.407 47.6229 65.8199 47.3277C66.1503 47.0918 66.5194 46.9412 66.9 46.8604V37.04L58.4036 41.9501C58.524 42.3203 58.5784 42.7156 58.5395 43.12ZM61.9804 41.7786C62.5032 40.8721 63.6613 40.5615 64.567 41.0849C65.4726 41.6083 65.7829 42.7675 65.2601 43.674C64.7372 44.5805 63.5791 44.8911 62.6734 44.3677C61.7678 43.8443 61.4575 42.6852 61.9804 41.7786Z" fill="#FF7010"/>
                            <path d="M70.6011 47.5851C71.0914 47.4536 71.4929 47.1132 71.7035 46.6509C72.2152 45.5264 73.3914 44.8517 74.6133 44.9692C75.1176 45.0159 75.614 44.8398 75.9726 44.4808C76.3316 44.1217 76.5093 43.6257 76.4605 43.1202C76.4216 42.7157 76.476 42.3204 76.5964 41.9501L68.1 37.04V46.8604C68.4805 46.9412 68.8497 47.0917 69.1801 47.3277C69.5933 47.6231 70.1121 47.7167 70.6011 47.5851ZM70.433 41.0849C71.3386 40.5615 72.4968 40.8721 73.0196 41.7786C73.5425 42.6851 73.2322 43.8443 72.3265 44.3677C71.4209 44.8911 70.2628 44.5805 69.7399 43.674C69.2171 42.7675 69.5274 41.6083 70.433 41.0849Z" fill="#FF7010"/>
                            <path d="M79.0742 32.8956C78.9429 32.4051 78.6027 32.003 78.1406 31.7926C77.7713 31.6241 77.4565 31.3794 77.1963 31.0898L68.6998 35.9999L77.1964 40.91C77.4565 40.6206 77.7713 40.3759 78.1406 40.2074C78.6027 39.9969 78.9429 39.5948 79.0742 39.1042C79.2054 38.6137 79.1117 38.0951 78.8172 37.6816C78.0996 36.6758 78.0996 35.3241 78.8172 34.3181C79.1117 33.9048 79.2054 33.3861 79.0742 32.8956ZM75.2595 37.8952C74.2138 37.8952 73.366 37.0467 73.366 35.9999C73.366 34.9532 74.2138 34.1046 75.2595 34.1046C76.3053 34.1046 77.1531 34.9532 77.1531 35.9999C77.1531 37.0467 76.3053 37.8952 75.2595 37.8952Z" fill="#FF7010"/>
                            <path d="M76.4605 28.8802C76.5093 28.3744 76.3316 27.8784 75.9726 27.5193C75.614 27.1602 75.1144 26.9826 74.6136 27.0309C73.3812 27.1492 72.2148 26.4736 71.7035 25.3493C71.4929 24.8871 71.0914 24.5465 70.6011 24.415C70.1117 24.2838 69.5933 24.3772 69.1801 24.6724C68.8497 24.9084 68.4805 25.0589 68.1 25.1396V34.9601L76.5964 30.05C76.476 29.6798 76.4216 29.2845 76.4605 28.8802ZM73.0196 30.2215C72.4968 31.128 71.3386 31.4386 70.433 30.9152C69.5274 30.3918 69.2171 29.2327 69.7399 28.3261C70.2628 27.4196 71.4209 27.109 72.3265 27.6324C73.2322 28.1558 73.5425 29.3149 73.0196 30.2215Z" fill="#FF7010"/>
                        </g>
                        <path d="M50.8887 78V65.3174H40.9482V78H42.5391V66.7588H49.3242V78H50.8887ZM55.6172 78L60.3369 70.9336H60.4775V78H61.9893V68.5254H60.4775L55.7578 75.5918H55.6172V68.5254H54.1055V78H55.6172ZM74.0918 80.5049V76.7344H72.5801V68.5254H71.0684V76.7344H66.5156V68.5254H65.0039V78H72.668V80.5049H74.0918ZM85.166 80.5049V76.7344H83.6543V68.5254H82.1426V76.7344H77.5898V68.5254H76.0781V78H83.7422V80.5049H85.166ZM90.0791 76.8398C88.9805 76.8398 88.1631 76.2773 88.1631 75.3105C88.1631 74.3613 88.7959 73.8604 90.2373 73.7637L92.7861 73.5967V74.4668C92.7861 75.8203 91.6348 76.8398 90.0791 76.8398ZM89.7979 78.167C91.0635 78.167 92.1006 77.6133 92.7158 76.6025H92.8564V78H94.2979V71.5137C94.2979 69.5449 93.0059 68.3584 90.6943 68.3584C88.6729 68.3584 87.1787 69.3604 86.9766 70.8809H88.5059C88.7168 70.1338 89.5078 69.7031 90.6416 69.7031C92.0566 69.7031 92.7861 70.3447 92.7861 71.5137V72.375L90.0527 72.542C87.8467 72.6738 86.5986 73.6494 86.5986 75.3457C86.5986 77.0771 87.9609 78.167 89.7979 78.167Z" fill="#191919"/>
                        <defs>
                            <clipPath id="clip0_11140_3045">
                                <rect width="32" height="32" fill="white" transform="translate(51.5 20)"/>
                            </clipPath>
                        </defs>
                    </svg></Link>

                    <Link to="/sushi"> <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="134" height="103" rx="11.5" fill="white" stroke="#F0F0F0"/>
                        <g clip-path="url(#clip0_11140_3096)">
                            <path d="M70.9592 39.3818C66.7035 39.3818 62.6928 40.0078 59.3607 41.1921C58.5382 41.4844 57.682 41.6328 56.816 41.6327C55.7481 41.6327 54.7134 41.4049 53.7689 40.9854C54.5447 43.87 57.1871 46 60.3192 46H75.8109C78.975 46 81.6398 43.8261 82.3847 40.8964C82.0829 40.8954 81.7828 40.8536 81.4925 40.7714C78.2797 39.8624 74.6373 39.3818 70.9592 39.3818Z" fill="#FF7010"/>
                            <path d="M61.5413 38.2524C62.8704 37.929 64.26 37.6777 65.6871 37.5004C62.9049 34.4597 62.6457 29.3412 65.1837 26C63.1402 26.0629 61.1451 26.3969 59.2875 26.9744C58.3358 27.8861 57.6604 29.0605 57.3597 30.3514C56.5468 33.5583 58.4434 37.1184 61.5413 38.2524Z" fill="#FF7010"/>
                            <path d="M58.6039 39.1221C55.8217 37.0409 54.3729 33.4435 55.2093 29.8527C55.3149 29.3996 55.4571 28.9581 55.6298 28.5303C54.8926 28.9417 54.1966 29.3995 53.5508 29.9016C49.5424 32.9999 51.8248 39.4418 56.816 39.4297C57.4101 39.4297 58.0137 39.3298 58.6039 39.1221Z" fill="#FF7010"/>
                            <path d="M77.4456 29.2261C76.4726 29.7045 75.688 30.4897 75.2114 31.4733C74.41 33.127 74.6105 35.0496 75.6766 36.487C75.8414 36.7092 76.4471 37.3774 76.5034 37.529C78.4269 37.774 80.3099 38.147 82.095 38.6521C82.4659 38.7571 82.8652 38.6612 83.1477 38.3991C83.4303 38.137 83.5551 37.7466 83.4772 37.3696C82.8028 34.1095 80.5905 31.259 77.4456 29.2261Z" fill="#FF7010"/>
                            <path d="M68.6896 37.2381C70.293 37.1552 71.9196 37.1612 73.538 37.2552C72.3139 35.2415 72.1577 32.7143 73.2239 30.5142C73.7036 29.5242 74.3985 28.6732 75.2499 28.0121C73.1113 27.008 70.6783 26.3379 68.0857 26.0928C64.577 28.9811 64.9069 34.7692 68.6896 37.2381Z" fill="#FF7010"/>
                        </g>
                        <path d="M50.0889 78.2988C52.7871 78.2988 54.791 76.7959 55.2129 74.4668H53.6045C53.2002 75.9346 51.8555 76.8398 50.0889 76.8398C47.6455 76.8398 46.1162 74.8447 46.1162 71.6631C46.1162 68.4814 47.6455 66.4775 50.0801 66.4775C51.8291 66.4775 53.1826 67.5059 53.6045 69.1406H55.2129C54.835 66.6973 52.752 65.0186 50.0801 65.0186C46.6348 65.0186 44.4902 67.5674 44.4902 71.6631C44.4902 75.75 46.6436 78.2988 50.0889 78.2988ZM58.4824 81.4277C60.1611 81.4277 60.917 80.7773 61.7256 78.5801L65.4258 68.5254H63.8174L61.2246 76.3213H61.084L58.4824 68.5254H56.8477L60.3545 78.0088L60.1787 78.5713C59.7832 79.7139 59.3086 80.127 58.4385 80.127C58.2275 80.127 57.9902 80.1182 57.8057 80.083V81.375C58.0166 81.4102 58.2803 81.4277 58.4824 81.4277ZM67.6143 78H79.3213V68.5254H77.8096V76.7344H74.2236V68.5254H72.7119V76.7344H69.126V68.5254H67.6143V78ZM83.8389 78L88.5586 70.9336H88.6992V78H90.2109V68.5254H88.6992L83.9795 75.5918H83.8389V68.5254H82.3271V78H83.8389Z" fill="#191919"/>
                        <defs>
                            <clipPath id="clip0_11140_3096">
                                <rect width="32" height="32" fill="white" transform="translate(51.5 20)"/>
                            </clipPath>
                        </defs>
                    </svg> </Link>

                    <a href="/drinks"> <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="134" height="103" rx="11.5" fill="white" stroke="#F0F0F0"/>
                        <path d="M68.6053 26.5133V23.6814L74.5987 22.2569C75.149 22.1261 75.4814 21.5654 75.332 21.0199L75.3069 20.9282C75.1649 20.4099 74.6388 20.0965 74.1154 20.2184L67.1678 21.8375C66.7151 21.943 66.3948 22.3466 66.3948 22.8114V26.5133H59.1667C58.6144 26.5133 58.1667 26.961 58.1667 27.5133V31.115H76.8334V27.5133C76.8334 26.961 76.3856 26.5133 75.8334 26.5133H68.6053Z" fill="#FF7010"/>
                        <path d="M58.2527 32.8848L60.7948 50.1591C60.9422 51.2211 61.9001 51.9998 62.9685 51.9998H71.9211C73.0264 51.9998 73.9474 51.2211 74.0948 50.1591L76.6369 32.8848H58.2527Z" fill="#FF7010"/>
                        <path d="M41.8447 78V65.3174H40.2627V70.8018H33.3018V65.3174H31.7197V78H33.3018V72.2256H40.2627V78H41.8447ZM47.9795 76.8398C46.8809 76.8398 46.0635 76.2773 46.0635 75.3105C46.0635 74.3613 46.6963 73.8604 48.1377 73.7637L50.6865 73.5967V74.4668C50.6865 75.8203 49.5352 76.8398 47.9795 76.8398ZM47.6982 78.167C48.9639 78.167 50.001 77.6133 50.6162 76.6025H50.7568V78H52.1982V71.5137C52.1982 69.5449 50.9062 68.3584 48.5947 68.3584C46.5732 68.3584 45.0791 69.3604 44.877 70.8809H46.4062C46.6172 70.1338 47.4082 69.7031 48.542 69.7031C49.957 69.7031 50.6865 70.3447 50.6865 71.5137V72.375L47.9531 72.542C45.7471 72.6738 44.499 73.6494 44.499 75.3457C44.499 77.0771 45.8613 78.167 47.6982 78.167ZM61.3125 78H62.8242V68.5254H55.1602V78H56.6719V69.791H61.3125V78ZM67.3418 78L72.0615 70.9336H72.2021V78H73.7139V68.5254H72.2021L67.4824 75.5918H67.3418V68.5254H65.8301V78H67.3418ZM83.5928 68.5254H75.9287V69.791H79.0049V78H80.5166V69.791H83.5928V68.5254ZM87.7236 73.6846L91.5205 78H93.4805L88.9717 72.9902L93.3135 68.5254H91.4766L87.7236 72.4893H87.3105V68.5254H85.7988V78H87.3105V73.6846H87.7236ZM97.1016 78L101.821 70.9336H101.962V78H103.474V68.5254H101.962L97.2422 75.5918H97.1016V68.5254H95.5898V78H97.1016Z" fill="#191919"/>
                    </svg></a>

                    <a href="/snacks">  <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="134" height="103" rx="11.5" fill="white" stroke="#F0F0F0"/>
                        <path d="M60.565 20C60.2696 20 60.049 20.2384 60.0317 20.5333V28.6281C60.5679 28.8216 60.9838 29.2942 61.0775 29.8792C61.0813 29.8995 61.2941 31.0933 62.165 32.35V20.5333C62.165 20.2379 61.9272 20 61.6317 20H60.565ZM73.365 20C73.0696 20 72.849 20.2384 72.8317 20.5333V32.3448C73.708 31.078 73.9223 29.8687 73.9223 29.8687C74.0193 29.2892 74.4326 28.8208 74.965 28.6281V20.5333C74.965 20.2379 74.7272 20 74.4317 20H73.365ZM63.765 22.1334C63.4696 22.1334 63.2317 22.3712 63.2317 22.6666V33.5511C63.7778 34.0255 64.4585 34.4281 65.365 34.6729V22.6666C65.365 22.3712 65.1272 22.1334 64.8317 22.1334H63.765ZM70.165 22.1334C69.8696 22.1334 69.6317 22.3712 69.6317 22.6666V34.6729C70.5385 34.4277 71.2191 34.024 71.765 33.549V22.6666C71.765 22.3712 71.5272 22.1334 71.2317 22.1334H70.165ZM57.365 24.2667C57.0696 24.2667 56.8317 24.5045 56.8317 24.8V28.5323H58.965V24.8C58.965 24.5045 58.7272 24.2667 58.4317 24.2667H57.365ZM66.965 24.2667C66.6696 24.2667 66.4317 24.5045 66.4317 24.8V34.875C66.7626 34.9125 67.1169 34.9333 67.4973 34.9333C67.8789 34.9333 68.2332 34.9127 68.565 34.875V24.8C68.565 24.5045 68.3272 24.2667 68.0317 24.2667H66.965ZM76.565 24.2667C76.2696 24.2667 76.0317 24.5045 76.0317 24.8V28.5323H78.165V24.8C78.165 24.5045 77.9272 24.2667 77.6317 24.2667H76.565ZM54.6984 29.599C54.3772 29.6001 54.1299 29.8826 54.1713 30.201L56.8369 50.4646C56.9312 51.2584 57.551 52 58.4307 52H76.565C77.4425 52 78.0618 51.2601 78.1588 50.4688L80.8286 30.201C80.8701 29.8809 80.6201 29.5976 80.2973 29.599H75.4984C75.2374 29.6003 75.0157 29.7902 74.9744 30.0479C74.9744 30.0479 74.7222 31.5286 73.6629 33.0239C72.6037 34.5193 70.8009 36 67.4984 36C64.1958 36 62.3919 34.5193 61.3327 33.0239C60.2735 31.5286 60.0254 30.0479 60.0254 30.0479C59.9839 29.7891 59.7605 29.5988 59.4984 29.599H54.6984ZM67.4984 39.7344C69.8485 39.7344 71.765 41.6478 71.765 43.9979C71.765 46.348 69.8485 48.2656 67.4984 48.2656C65.1482 48.2656 63.2296 46.348 63.2296 43.9979C63.2296 41.6478 65.1482 39.7344 67.4984 39.7344Z" fill="#FF7010"/>
                        <path d="M35.0957 72.2256H36.8799C38.7959 72.2256 39.8857 73.1133 39.8857 74.5371C39.8857 75.9082 38.7256 76.8926 36.9414 76.8926C35.1836 76.8926 33.9883 76.0225 33.8477 74.6953H32.3184C32.4326 76.8574 34.2783 78.2988 36.959 78.2988C39.5166 78.2988 41.5117 76.6729 41.5117 74.5811C41.5117 72.7617 40.3164 71.6279 38.6992 71.4609V71.3203C40.0527 70.9863 40.9668 69.791 40.9668 68.4111C40.9668 66.4336 39.2793 65.0186 36.8975 65.0186C34.375 65.0186 32.7314 66.3721 32.5732 68.5693H34.1113C34.2432 67.2246 35.2715 66.4248 36.8359 66.4248C38.4355 66.4248 39.3584 67.2773 39.3584 68.5518C39.3584 69.8789 38.3037 70.8193 36.8096 70.8193H35.0957V72.2256ZM46.9082 76.8398C45.8096 76.8398 44.9922 76.2773 44.9922 75.3105C44.9922 74.3613 45.625 73.8604 47.0664 73.7637L49.6152 73.5967V74.4668C49.6152 75.8203 48.4639 76.8398 46.9082 76.8398ZM46.627 78.167C47.8926 78.167 48.9297 77.6133 49.5449 76.6025H49.6855V78H51.127V71.5137C51.127 69.5449 49.835 68.3584 47.5234 68.3584C45.502 68.3584 44.0078 69.3604 43.8057 70.8809H45.335C45.5459 70.1338 46.3369 69.7031 47.4707 69.7031C48.8857 69.7031 49.6152 70.3447 49.6152 71.5137V72.375L46.8818 72.542C44.6758 72.6738 43.4277 73.6494 43.4277 75.3457C43.4277 77.0771 44.79 78.167 46.627 78.167ZM56.0137 73.6846L59.8105 78H61.7705L57.2617 72.9902L61.6035 68.5254H59.7666L56.0137 72.4893H55.6006V68.5254H54.0889V78H55.6006V73.6846H56.0137ZM64.3457 81.4277C66.0244 81.4277 66.7803 80.7773 67.5889 78.5801L71.2891 68.5254H69.6807L67.0879 76.3213H66.9473L64.3457 68.5254H62.7109L66.2178 78.0088L66.042 78.5713C65.6465 79.7139 65.1719 80.127 64.3018 80.127C64.0908 80.127 63.8535 80.1182 63.6689 80.083V81.375C63.8799 81.4102 64.1436 81.4277 64.3457 81.4277ZM80.9746 71.4258C80.7109 69.7383 79.3047 68.3584 77.002 68.3584C74.3477 68.3584 72.6602 70.2744 72.6602 73.2275C72.6602 76.2422 74.3564 78.167 77.0107 78.167C79.2871 78.167 80.7021 76.8838 80.9746 75.1436H79.4453C79.1641 76.2158 78.2764 76.8047 77.002 76.8047C75.3145 76.8047 74.2246 75.416 74.2246 73.2275C74.2246 71.083 75.2969 69.7207 77.002 69.7207C78.3643 69.7207 79.1992 70.4854 79.4453 71.4258H80.9746ZM85.2988 73.6846L89.0957 78H91.0557L86.5469 72.9902L90.8887 68.5254H89.0518L85.2988 72.4893H84.8857V68.5254H83.374V78H84.8857V73.6846H85.2988ZM94.6768 78L99.3965 70.9336H99.5371V78H101.049V68.5254H99.5371L94.8174 75.5918H94.6768V68.5254H93.165V78H94.6768Z" fill="#191919"/>
                    </svg></a>

                    <a href="/desserts"> <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="134" height="103" rx="11.5" fill="white" stroke="#F0F0F0"/>
                        <g clip-path="url(#clip0_11166_3078)">
                            <path d="M69.1691 35.7922C68.7236 35.3461 68.1241 35.0962 67.4995 35.0962C66.875 35.0962 66.2754 35.3461 65.8299 35.7922C65.8299 35.7922 64.5191 37.1281 64.1455 37.4287L65.2925 52.0001H69.7164L70.8633 37.4387C70.6471 37.3185 69.1691 35.7922 69.1691 35.7922Z" fill="#FF7010"/>
                            <path d="M60.8751 35.642C60.4503 35.2183 59.8856 34.9714 59.2916 34.9498C58.6976 34.9282 58.117 35.1333 57.6636 35.5251L55.3698 37.4889L57.5784 49.9496C57.6799 50.5224 57.9758 51.0407 58.4143 51.4137C58.8528 51.7868 59.406 51.9908 59.9772 51.9902H63.9817L62.8413 37.5122C62.5824 37.4121 60.8751 35.642 60.8751 35.642Z" fill="#FF7010"/>
                            <path d="M66.9702 22.6801C67.1394 22.7485 67.3191 22.7859 67.5011 22.7903C67.7288 22.796 67.9541 22.7411 68.1546 22.631C68.3552 22.5208 68.5241 22.3594 68.6448 22.1625C68.7947 21.9354 68.8745 21.6679 68.8742 21.3943C68.8734 21.1817 68.8251 20.972 68.7329 20.7812C68.6408 20.5904 68.5071 20.4236 68.3422 20.2933C68.1773 20.163 67.9854 20.0728 67.7811 20.0294C67.5769 19.986 67.3656 19.9907 67.1633 20.043C66.9611 20.0953 66.7732 20.1939 66.6139 20.3313C66.4547 20.4687 66.3283 20.6413 66.2443 20.836C66.1602 21.0306 66.1209 21.2422 66.1291 21.4547C66.1374 21.6672 66.193 21.875 66.2919 22.0623C66.4455 22.3384 66.6838 22.5554 66.9702 22.6801Z" fill="#FF7010"/>
                            <path d="M75.4085 28.5115L75.0349 28.4214L74.9432 28.0406C74.3566 25.7028 72.2691 23.8025 69.5656 23.1546C69.3205 23.4712 69.0054 23.7243 68.6461 23.8932C68.2867 24.0621 67.8933 24.142 67.4978 24.1264C66.4 24.1264 65.4923 23.208 65.4399 23.1445C62.7396 23.7924 60.6522 25.6727 60.0689 28.0239L59.9804 28.4214L59.6036 28.5216C58.0255 28.941 56.6649 29.9604 55.8013 31.3704C54.9378 32.7803 54.6367 34.4737 54.9601 36.1029L56.8181 34.5098C57.5202 33.9041 58.4186 33.5869 59.3379 33.6202C60.2572 33.6536 61.1313 34.0351 61.7893 34.6901L63.4278 36.3066L64.9287 34.8271C65.2652 34.4835 65.666 34.2125 66.1074 34.03C66.5488 33.8476 67.0216 33.7575 67.4978 33.765C68.4652 33.7713 69.3923 34.1605 70.0834 34.8504L71.5515 36.3133L73.226 34.6734C73.8848 34.0249 74.7565 33.6488 75.6719 33.6179C76.5873 33.587 77.4814 33.9037 78.1808 34.5064L80.0356 36.1029C80.3649 34.4743 80.0685 32.7791 79.2076 31.3667C78.3467 29.9543 76.9869 28.9324 75.4085 28.5115Z" fill="#FF7010"/>
                            <path d="M74.1338 35.6216C74.1338 35.6216 72.3708 37.405 72.1676 37.4852L71.0239 51.9898H75.035C75.6062 51.9904 76.1594 51.7864 76.5979 51.4134C77.0364 51.0403 77.3323 50.5221 77.4337 49.9492L78.5315 43.7573L79.6228 37.4885L77.3289 35.5147C76.8774 35.1271 76.3012 34.9235 75.7112 34.9432C75.1212 34.9629 74.5593 35.2046 74.1338 35.6216Z" fill="#FF7010"/>
                        </g>
                        <path d="M33.2578 73.333L33.6709 66.7412H38.5225V76.5762H32.3701V76.4707C32.9941 75.7236 33.1699 74.7656 33.2578 73.333ZM30.9375 78H40.2188V80.5049H41.6865V76.5762H40.1045V65.3174H32.2559L31.7725 73.2979C31.6758 74.959 31.333 76.084 30.4102 76.5762H29.4697V80.5049H30.9375V78ZM47.5928 69.6943C49.0957 69.6943 50.0977 70.8018 50.1328 72.4805H44.9121C45.0264 70.8018 46.0811 69.6943 47.5928 69.6943ZM50.0889 75.5479C49.6934 76.3828 48.8672 76.8311 47.6455 76.8311C46.0371 76.8311 44.9912 75.6445 44.9121 73.7725V73.7021H51.7236V73.1221C51.7236 70.1777 50.168 68.3584 47.6104 68.3584C45.0088 68.3584 43.3389 70.292 43.3389 73.2715C43.3389 76.2686 44.9824 78.167 47.6104 78.167C49.6846 78.167 51.1436 77.1738 51.6006 75.5479H50.0889ZM62.1123 71.4258C61.8486 69.7383 60.4424 68.3584 58.1396 68.3584C55.4854 68.3584 53.7979 70.2744 53.7979 73.2275C53.7979 76.2422 55.4941 78.167 58.1484 78.167C60.4248 78.167 61.8398 76.8838 62.1123 75.1436H60.583C60.3018 76.2158 59.4141 76.8047 58.1396 76.8047C56.4521 76.8047 55.3623 75.416 55.3623 73.2275C55.3623 71.083 56.4346 69.7207 58.1396 69.7207C59.502 69.7207 60.3369 70.4854 60.583 71.4258H62.1123ZM68.2998 69.6943C69.8027 69.6943 70.8047 70.8018 70.8398 72.4805H65.6191C65.7334 70.8018 66.7881 69.6943 68.2998 69.6943ZM70.7959 75.5479C70.4004 76.3828 69.5742 76.8311 68.3525 76.8311C66.7441 76.8311 65.6982 75.6445 65.6191 73.7725V73.7021H72.4307V73.1221C72.4307 70.1777 70.875 68.3584 68.3174 68.3584C65.7158 68.3584 64.0459 70.292 64.0459 73.2715C64.0459 76.2686 65.6895 78.167 68.3174 78.167C70.3916 78.167 71.8506 77.1738 72.3076 75.5479H70.7959ZM79.585 68.3584C78.293 68.3584 77.1592 69.0176 76.5527 70.1074H76.4121V68.5254H74.9707V81.1641H76.4824V76.5762H76.623C77.1416 77.5781 78.2314 78.167 79.585 78.167C81.9932 78.167 83.5664 76.2246 83.5664 73.2627C83.5664 70.2832 82.002 68.3584 79.585 68.3584ZM79.2246 76.8047C77.5195 76.8047 76.4385 75.4336 76.4385 73.2627C76.4385 71.083 77.5195 69.7207 79.2334 69.7207C80.9648 69.7207 82.002 71.0479 82.002 73.2627C82.002 75.4775 80.9648 76.8047 79.2246 76.8047ZM92.3643 68.5254H84.7002V69.791H87.7764V78H89.2881V69.791H92.3643V68.5254ZM102.858 78H104.37V68.5254H102.858V78ZM97.9541 72.832C99.1934 72.832 100.002 73.5967 100.002 74.7832C100.002 75.9609 99.2021 76.7344 97.9541 76.7344H96.082V72.832H97.9541ZM94.5703 78H97.9541C100.125 78 101.514 76.752 101.514 74.7832C101.514 72.8145 100.125 71.5664 97.9541 71.5664H96.082V68.5254H94.5703V78Z" fill="#191919"/>
                        <defs>
                            <clipPath id="clip0_11166_3078">
                                <rect width="32" height="32" fill="white" transform="translate(51.5 20)"/>
                            </clipPath>
                        </defs>
                    </svg></a>

                    <a href="/souse"> <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="134" height="103" rx="11.5" fill="white" stroke="#F0F0F0"/>
                        <g clip-path="url(#clip0_11166_3131)">
                            <path d="M83.4807 30.4214C83.4487 27.9779 81.4575 26 79.0144 26C76.8318 26 75.011 27.5791 74.6245 29.6583C73.8572 29.999 72.5244 30.5437 71.7302 30.6763C70.7727 30.836 69.6155 30.884 68.2908 30.8187C65.7605 30.694 63.2344 29.8673 60.9853 28.4275C58.1553 26.6159 55.7449 26.192 53.1697 27.0529C52.1709 27.3869 51.5 28.3296 51.5 29.3993C51.5 29.7458 51.6877 30.0648 51.9895 30.2306C52.3345 30.4199 52.657 30.5836 52.969 30.7416C54.6592 31.5981 55.5903 32.0698 56.2073 34.6696C56.6682 36.6108 57.4746 38.2379 58.6045 39.5055C59.084 40.0436 59.623 40.5183 60.2165 40.9269H73.0471C74.9853 39.4666 76.1719 37.2513 76.498 34.4583C76.6938 32.7816 76.5293 31.3198 76.4145 30.5994C76.4194 30.5607 76.4226 30.5215 76.4226 30.4813C76.4226 29.054 77.5852 27.8929 79.0144 27.8929C80.4433 27.8929 81.6062 29.054 81.6062 30.4813C81.6062 30.5264 81.6094 30.5715 81.6157 30.6161C81.6169 30.6255 81.7204 31.564 81.1423 32.2376C80.6684 32.7897 79.8313 33.0697 78.6543 33.0697C78.1365 33.0697 77.7168 33.4934 77.7168 34.0162C77.7168 34.5387 78.1365 34.9626 78.6543 34.9626C80.3996 34.9626 81.7136 34.4628 82.5593 33.4769C83.5967 32.2682 83.5205 30.7988 83.4807 30.4214Z" fill="#FF7010"/>
                            <path d="M60.2217 42.8193C60.1694 43.0232 60.1418 43.2369 60.1418 43.4567V45.0533C60.1418 45.5758 60.5615 45.9998 61.0791 45.9998H72.2441C72.7617 45.9998 73.1816 45.5758 73.1816 45.0533V43.4567C73.1816 43.2369 73.1538 43.0232 73.1016 42.8193H60.2217Z" fill="#FF7010"/>
                        </g>
                        <path d="M46.2217 78.2988C48.9199 78.2988 50.9238 76.7959 51.3457 74.4668H49.7373C49.333 75.9346 47.9883 76.8398 46.2217 76.8398C43.7783 76.8398 42.249 74.8447 42.249 71.6631C42.249 68.4814 43.7783 66.4775 46.2129 66.4775C47.9619 66.4775 49.3154 67.5059 49.7373 69.1406H51.3457C50.9678 66.6973 48.8848 65.0186 46.2129 65.0186C42.7676 65.0186 40.623 67.5674 40.623 71.6631C40.623 75.75 42.7764 78.2988 46.2217 78.2988ZM57.876 78.167C60.5742 78.167 62.2441 76.3037 62.2441 73.2627C62.2441 70.2129 60.5742 68.3584 57.876 68.3584C55.1777 68.3584 53.5078 70.2129 53.5078 73.2627C53.5078 76.3037 55.1777 78.167 57.876 78.167ZM57.876 76.8047C56.083 76.8047 55.0723 75.5039 55.0723 73.2627C55.0723 71.0127 56.083 69.7207 57.876 69.7207C59.6689 69.7207 60.6797 71.0127 60.6797 73.2627C60.6797 75.5039 59.6689 76.8047 57.876 76.8047ZM65.25 81.4277C66.9287 81.4277 67.6846 80.7773 68.4932 78.5801L72.1934 68.5254H70.585L67.9922 76.3213H67.8516L65.25 68.5254H63.6152L67.1221 78.0088L66.9463 78.5713C66.5508 79.7139 66.0762 80.127 65.2061 80.127C64.9951 80.127 64.7578 80.1182 64.5732 80.083V81.375C64.7842 81.4102 65.0479 81.4277 65.25 81.4277ZM81.8789 71.4258C81.6152 69.7383 80.209 68.3584 77.9062 68.3584C75.252 68.3584 73.5645 70.2744 73.5645 73.2275C73.5645 76.2422 75.2607 78.167 77.915 78.167C80.1914 78.167 81.6064 76.8838 81.8789 75.1436H80.3496C80.0684 76.2158 79.1807 76.8047 77.9062 76.8047C76.2188 76.8047 75.1289 75.416 75.1289 73.2275C75.1289 71.083 76.2012 69.7207 77.9062 69.7207C79.2686 69.7207 80.1035 70.4854 80.3496 71.4258H81.8789ZM92.5664 78H94.0781V68.5254H92.5664V78ZM87.6621 72.832C88.9014 72.832 89.71 73.5967 89.71 74.7832C89.71 75.9609 88.9102 76.7344 87.6621 76.7344H85.79V72.832H87.6621ZM84.2783 78H87.6621C89.833 78 91.2217 76.752 91.2217 74.7832C91.2217 72.8145 89.833 71.5664 87.6621 71.5664H85.79V68.5254H84.2783V78Z" fill="#191919"/>
                        <defs>
                            <clipPath id="clip0_11166_3131">
                                <rect width="32" height="32" fill="white" transform="translate(51.5 20)"/>
                            </clipPath>
                        </defs>
                    </svg> </a>

                    <div className='begin__images'>

                        <img src={group1} alt="" className='begin__image'/>

                        <img src={group2} alt="" className='begin__image'/>

                        <img src={group3} alt="" className='begin__image'/>

                        <img src={group4} alt="" className='begin__image'/>

                    </div>
                </div>


                <div className="begin__btn">

                    <div className="begin__btn-menu">

                        <p className="begin__btn-text">Проверить адрес доставки </p>

                        <textarea placeholder="Адрес" className="begin__btn-address"></textarea>

                        <button className="begin__btn-button"> Проверить </button>

                    </div>

                </div>


            </div>


        </section>
    );
};

export default Begin;
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import React from 'react'

const SkeltonModal = () => {
    return (
        <SkeletonTheme className="sk-list" baseColor="gray" highlightColor="#444">
            {
                [100,180,150,180,160,120,160].map((e, i) => {
                    return (
                        <div className="sk-list-item" key={i}>
                            <div className="sk-list-item-grp">
                                <Skeleton width={50} className="sk-list-item-date" />
                                <div className="sk-list-item-details">
                                    <Skeleton width={50} />
                                    <Skeleton width={e} />
                                </div>
                            </div>
                            <Skeleton count={1} width={60} />
                        </div>
                    )
                })
            }
        </SkeletonTheme>

        // <SkeletonTheme
        //     baseColor="blue"
        //     highlightColor="#444">
        //     <div className="profile">
        //         <Skeleton
        //         highlightColor="white"
        //             height={50}
        //         />
        //         <Skeleton count={3} />
        //     </div>
        // </SkeletonTheme>


    )
}

export default SkeltonModal

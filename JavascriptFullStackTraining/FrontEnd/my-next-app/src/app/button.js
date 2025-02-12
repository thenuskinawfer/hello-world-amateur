"use client";

export default function NewButton({ButtonContent}) {
    return (
        <>
        <button onClick={() => alert("Hello !")}>
        {ButtonContent}
        </button>
        </>
    )
}